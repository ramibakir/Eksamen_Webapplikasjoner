import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/articleService';
import { listCategories } from '../utils/categoryService';
import { StyledSubtitle, StyledDetailViewWrapper } from '../styles/mainStyles';
import {
  ArticleDataContainer,
  AuthorDateParagraph,
  IntroParagraph,
  ContentParagraph,
  EditButton,
  DeleteButton,
} from '../styles/articleStyles';

const ArticleDetailedView = () => {
  const [article, setArticle] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      const artRes = await get(id);
      const catRes = await listCategories();
      if (!artRes.data.success) {
        setError(artRes.error);
      } else {
        setArticle(artRes.data.data);
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
          <ArticleDataContainer>
            <AuthorDateParagraph>
              Av {article.author} den {formatDate(article.publishDate)}
            </AuthorDateParagraph>
          </ArticleDataContainer>
          <StyledSubtitle>{article.title}</StyledSubtitle>
          <IntroParagraph>{article.ingress}</IntroParagraph>
          <ContentParagraph>{article.content}</ContentParagraph>
          {category && (
            <AuthorDateParagraph>{category.name}</AuthorDateParagraph>
          )}
          <ArticleDataContainer>
            <EditButton>Rediger</EditButton>
            <DeleteButton>Slett</DeleteButton>
          </ArticleDataContainer>
        </>
      )}
    </StyledDetailViewWrapper>
  );
};

export default ArticleDetailedView;
