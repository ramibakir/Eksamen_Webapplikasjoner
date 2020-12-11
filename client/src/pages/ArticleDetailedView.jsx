import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/articleService';
import { listCategories } from '../utils/categoryService';
import { download } from '../utils/imageService';
import { useSetHeader } from '../context/HeaderProvider';
import { StyledSubtitle, StyledDetailViewWrapper } from '../styles/mainStyles';
import {
  ArticleDataContainer,
  AuthorDateParagraph,
  IntroParagraph,
  ContentParagraph,
  EditButton,
  DeleteButton,
} from '../styles/ArticleStyles';
import { useAuthContext } from '../context/AuthProvider';

const ArticleDetailedView = () => {
  const [article, setArticle] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const { id } = useParams();
  const { isLoggedIn, isAdmin } = useAuthContext();
  const setHeader = useSetHeader();

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      const artRes = await get(id);
      const catRes = await listCategories();
      if (!artRes.data.success) {
        setError(artRes.error);
      } else {
        setArticle(artRes.data.data);
        setHeader(artRes.data.data.title);
        setError(null);
        if (!catRes.data) {
          setError(catRes.error);
        } else {
          const cat = catRes.data.filter(
            (c) => c._id === artRes.data.data.category
          );
          setCategory(cat[0]);
          setError(null);
        }
      }
      setLoading(false);
    };
    fetchArticle();
  }, []);

  useEffect(() => {
    const fetchImagePath = async () => {
      if (article) {
        console.log(article.image);
        const { data, error } = await download(article.image);
        if (data) {
          setImage(data.data);
        } else {
          setError(error);
        }
      } else {
        console.log('no article set');
      }
    };
    fetchImagePath();
  }, [article]);

  const formatDate = (date) => {
    const d = date.substr(8, 2);
    const m = date.substr(5, 2);
    const y = date.substr(0, 4);

    return `${d}/${m}/${y}`;
  };

  return (
    <StyledDetailViewWrapper>
      {error && <p>{error}</p>}
      {loading && <div>Loading ...</div>}
      {image && (
        <img
          src={`${process.env.BASE_URL}${image.imagePath}`}
          alt="article illustration"
        />
      )}
      {article && (
        <>
          <StyledSubtitle>{article.title}</StyledSubtitle>
          {category && (
            <AuthorDateParagraph>Kategori: {category.name}</AuthorDateParagraph>
          )}
          <AuthorDateParagraph>Forfatter: {article.author}</AuthorDateParagraph>
          <AuthorDateParagraph>
            Publisert: {formatDate(article.publishDate)}
          </AuthorDateParagraph>
          <IntroParagraph>{article.ingress}</IntroParagraph>
          <ContentParagraph>{article.content}</ContentParagraph>
          <ArticleDataContainer>
            <EditButton>Rediger</EditButton>
            <DeleteButton>Slett</DeleteButton>
          </ArticleDataContainer>
        </>
      )}
      {isLoggedIn && isAdmin && (
        <ArticleDataContainer>
          <EditButton>Rediger</EditButton>
          <DeleteButton>Slett</DeleteButton>
        </ArticleDataContainer>
      )}
    </StyledDetailViewWrapper>
  );
};

export default ArticleDetailedView;
