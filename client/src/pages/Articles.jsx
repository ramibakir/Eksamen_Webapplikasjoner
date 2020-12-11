import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { useSetHeader } from '../context/HeaderProvider';
import { list } from '../utils/articleService';
import { listCategories } from '../utils/categoryService';
import { FilterButton } from '../styles/mainStyles';
import {
  StyledListContainer,
  StyledCardTitle,
  StyledCardInfo,
} from '../styles/listStyles';
import {
  StyledArticlesWrapper,
  SpacedFilterContainer,
  LeftAlignContainer,
  RightAlignContainer,
  NewArticleButton,
  FullSizeListItem,
  ArticleImage,
  ArticleContentContainer,
  ArticleIntroParagraph,
} from '../styles/articleStyles';

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { isLoggedIn, isAdmin } = useAuthContext();
  const setHeader = useSetHeader();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const artRes = await list();
      const catRes = await listCategories();
      if (!artRes.data.success) {
        setError(artRes.error);
      } else {
        setArticles(artRes.data.data);
        setError(null);
        if (!catRes.data) {
          setError(catRes.error);
        } else {
          setCategories(catRes.data);
          setError(null);
        }
      }
      setLoading(false);
    };
    const setHeaderContent = () => {
      setHeader('Fagartikler');
    };
    fetchData();
    setHeaderContent();
  }, []);

  const formatDate = (date) => {
    const d = date.substr(8, 2);
    const m = date.substr(5, 2);
    const y = date.substr(0, 4);

    return `${d}/${m}/${y}`;
  };

  return (
    <StyledArticlesWrapper>
      <SpacedFilterContainer>
        {isLoggedIn && isAdmin && (
          <LeftAlignContainer>
            <NavLink to="/create" style={{ textDecoration: 'none' }}>
              <NewArticleButton>NY ARTIKKEL</NewArticleButton>
            </NavLink>
          </LeftAlignContainer>
        )}
        <RightAlignContainer>
          <FilterButton>SØK</FilterButton>
          <FilterButton>FILTER</FilterButton>
        </RightAlignContainer>
      </SpacedFilterContainer>
      {error && <p>{error}</p>}
      <StyledListContainer>
        {loading && <div>Loading ...</div>}
        {articles &&
          articles.reverse().map((article) => (
            <Link
              to={`/articles/${article._id}`}
              style={{ textDecoration: 'none' }}
            >
              <FullSizeListItem>
                <ArticleImage src="https://media.gettyimages.com/photos/coffee-and-the-morning-paper-picture-id184993811?s=612x612" />
                <ArticleContentContainer>
                  <StyledCardTitle>{article.title}</StyledCardTitle>
                  {categories &&
                    categories.map(
                      (category) =>
                        category._id === article.category && (
                          <StyledCardInfo style={{ fontSize: '15px' }}>
                            {category.name} | {formatDate(article.publishDate)}{' '}
                            | {article.author}
                          </StyledCardInfo>
                        )
                    )}
                  <ArticleIntroParagraph>
                    {article.ingress}
                  </ArticleIntroParagraph>
                </ArticleContentContainer>
              </FullSizeListItem>
            </Link>
          ))}
      </StyledListContainer>
    </StyledArticlesWrapper>
  );
};
export default Articles;
