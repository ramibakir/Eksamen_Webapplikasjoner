import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/articleService';
import { listCategories } from '../utils/categoryService';
import { download } from '../utils/imageService';
import { useSetHeader } from '../context/HeaderProvider';
import { StyledDetailViewWrapper } from '../styles/mainStyles';
import {
  ArticleDataContainer,
  AuthorDateParagraph,
  IntroParagraph,
  ContentParagraph,
  EditButton,
  DeleteButton,
} from '../styles/articleStyles';
import { useAuthContext } from '../context/AuthProvider';

const ArticleDetailedView = () => {
  const [article, setArticle] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { isLoggedIn, isAdmin } = useAuthContext();
  const setHeader = useSetHeader();

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      const { data, error } = await get(id);
      if (!data.success) {
        setError(error);
      } else {
        setArticle(data.data);
        setError(null);
      }
      setLoading(false);
    };
    fetchArticle();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      if (article) {
        const { data, error } = await listCategories();
        if (!data) {
          setError(error);
        } else {
          const cat = data.filter((c) => c._id === article.category);
          setCategory(cat[0]);
          setError(null);
        }
      }
    };
    fetchCategories();
  }, [article]);

  useEffect(() => {
    const fetchImagePath = async () => {
      if (article) {
        const { data, error } = await download(article.image);
        if (!data.success) {
          setError(error);
        } else {
          setHeader({
            title: article.title,
            image: `${process.env.BASE_URL}${data.data.imagePath}`,
          });
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
      {article && (
        <>
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
