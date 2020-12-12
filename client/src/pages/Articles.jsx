import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { useSetHeader } from '../context/HeaderProvider';
import { list, getNonHidden } from '../utils/articleService';
import { listCategories } from '../utils/categoryService';
import { listImages } from '../utils/imageService';
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
  const [hidden, setHidden] = useState(null);
  const [images, setImages] = useState(null);

  const { isLoggedIn, isAdmin } = useAuthContext();
  const setHeader = useSetHeader();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(await getNonHidden());
      const { data } = await list();
      if (!data.success) {
        setError(data.error);
      } else {
        setArticles(data.data.data);
        setError(null);
      }
      setLoading(false);
    };
    const setHeaderContent = () => {
      setHeader({ title: 'Fagartikler', image: '' });
    };
    fetchData();
    setHeaderContent();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await listCategories();
      if (!data) {
        setError(data.error);
      } else {
        setCategories(data);
        setError(null);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await listImages();
      if (!data.success) {
        setError(error);
      } else {
        console.log(data);
        setImages(data.data);
        setError(null);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await getNonHidden();
      if (!data.success) {
        setError(data.error);
      } else {
        setHidden(data.data);
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

  const modifyPath = (image) => {
    const imagePath = image.file_path.replace(/\\/g, '/').replace('public', '');
    return imagePath;
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
        {isLoggedIn &&
          articles &&
          articles.reverse().map((article) => (
            <Link
              to={`/articles/${article._id}`}
              style={{ textDecoration: 'none' }}
            >
              <FullSizeListItem>
                {images &&
                  images.map(
                    (image) =>
                      image._id === article.image && (
                        <ArticleImage
                          src={`${process.env.BASE_URL}${modifyPath(image)}`}
                        />
                      )
                  )}

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
        {!isLoggedIn &&
          hidden &&
          hidden.reverse().map((article) => (
            <Link
              to={`/articles/${article._id}`}
              style={{ textDecoration: 'none' }}
            >
              <FullSizeListItem>
                {images &&
                  images.map(
                    (image) =>
                      image._id === article.image && (
                        <ArticleImage
                          src={`${process.env.BASE_URL}${modifyPath(image)}`}
                        />
                      )
                  )}

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
