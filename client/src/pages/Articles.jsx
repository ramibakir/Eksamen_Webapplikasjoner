import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { list } from '../utils/articleService';
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
  TitleContainer,
  ArticleIntroParagraph,
} from '../styles/articleStyles';

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const tempArticlesList = [
    { id: 1, author: 'Lars Larsen', date: '20.12.20' },
    { id: 2, author: 'Gunn Gundersen', date: '21.11.20' },
    { id: 3, author: 'Simen Simensen', date: '22.10.20' },
  ];

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
        {tempArticlesList.map((article) => (
          <Link
            to={`/articles/${article.id}`}
            style={{ textDecoration: 'none' }}
          >
            <FullSizeListItem>
              <ArticleImage src="https://media.gettyimages.com/photos/coffee-and-the-morning-paper-picture-id184993811?s=612x612" />
              <TitleContainer>
                <StyledCardTitle>Artikkeltittel {article.id}</StyledCardTitle>
                <StyledCardInfo>
                  Publisert {article.date} av {article.author}
                </StyledCardInfo>
                <ArticleIntroParagraph>
                  I don't think anybody knows it was Russia that wrote Lorem
                  Ipsum, but I don't know, maybe it was. It could be Russia, but
                  it could also be China. It could also be lots of other people.
                  It also could be some wordsmith sitting on their bed that
                  weights 400 pounds. Ok? Trump Ipsum is calling for a total and
                  complete shutdown of Muslim text entering your website.
                </ArticleIntroParagraph>
              </TitleContainer>
            </FullSizeListItem>
          </Link>
        ))}
      </StyledListContainer>
    </StyledArticlesWrapper>
  );
};
export default Articles;
