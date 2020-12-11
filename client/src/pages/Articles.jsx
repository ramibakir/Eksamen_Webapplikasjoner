import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { list, getNonHidden } from '../utils/articleService';
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
} from '../styles/ArticleStyles';

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notHidden, setNotHidden] = useState(null);

  const { isLoggedIn, isAdmin } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await list();
      if (!data.success) {
        setError(error);
      } else {
        setArticles(data.data);
        setError(null);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await getNonHidden();
      if (!data.success) {
        setError(error);
      } else {
        setNotHidden(data.data);
        setError(null);
      }
      setLoading(false);
    };
    fetchData();
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
                  <StyledCardInfo>
                    Publisert {formatDate(article.publishDate)} av{' '}
                    {article.author}
                  </StyledCardInfo>
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
