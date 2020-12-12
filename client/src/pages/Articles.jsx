import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { useSetHeader } from '../context/HeaderProvider';
import {
  list,
  getNonHidden,
  listByCategory,
  listBySearch,
} from '../utils/articleService';
import { listCategories } from '../utils/categoryService';
import { listImages } from '../utils/imageService';
import { FilterButton, StyledCenteredFlex } from '../styles/mainStyles';
import { StyledInput, StyledSelect } from '../styles/formStyles';
import {
  StyledListContainer,
  StyledCardTitle,
  StyledCardInfo,
} from '../styles/listStyles';
import {
  StyledArticlesWrapper,
  SpacedFilterContainer,
  FilterOptionsContainer,
  LeftAlignContainer,
  RightAlignContainer,
  NewArticleButton,
  PaginationButton,
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
  const [categoryFilter, setCategoryFilter] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);
  const [pages, setPages] = useState(null);

  const { isLoggedIn, isAdmin } = useAuthContext();
  const setHeader = useSetHeader();

  const nrOfPages = [];

  const createPaginationBtns = () => {
    for (let i = 1; i <= pages; i++) {
      nrOfPages.push(i);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(await getNonHidden());
      const { data } = await list('1');
      if (!data.success) {
        setError(data.error);
      } else {
        console.log(data.data);
        setPages(data.data.totalPages);
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
    const fetchCategories = async () => {
      setLoading(true);
      const { data } = await listCategories();
      if (!data) {
        setError(data.error);
      } else {
        setCategories(data);
        setError(null);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await listImages();
      if (!data.success) {
        setError(error);
      } else {
        setImages(data.data);
        setError(null);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await getNonHidden('1');
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

  const toggleCategoryFilter = () => {
    setCategoryFilter((display) => !display);
  };

  const toggleSearch = () => {
    setSearch((display) => !display);
  };

  const filterByCategory = async (event) => {
    const filterCriteria = event.target.value;
    if (filterCriteria === 'all') {
      const { data, error } = await list('1');
      if (!data) {
        setError(error);
      } else {
        setArticles(data.data.data);
        setError(null);
      }
    } else {
      const { data, error } = await listByCategory(filterCriteria);
      if (!data) {
        setError(error);
      } else {
        setArticles(data.data.data);
        setError(null);
      }
    }
  };

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchByInput = async () => {
    const { data, error } = await listBySearch(searchTerm);
    if (!data) {
      setError(error);
    } else {
      setArticles(data.data.data);
      setError(null);
    }
  };

  const changePage = async (event) => {
    const { data } = await list(event.target.value);
    if (!data.success) {
      setError(data.error);
    } else {
      setArticles(data.data.data);
      setError(null);
    }
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
          <FilterButton onClick={toggleSearch}>SØK</FilterButton>
          <FilterButton onClick={toggleCategoryFilter}>FILTER</FilterButton>
        </RightAlignContainer>
      </SpacedFilterContainer>
      {categoryFilter && (
        <FilterOptionsContainer>
          <StyledSelect onChange={filterByCategory}>
            <option value="all">Alle kategorier</option>
            {categories &&
              categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
          </StyledSelect>
        </FilterOptionsContainer>
      )}
      {search && (
        <FilterOptionsContainer>
          <StyledInput onChange={updateSearchTerm} />
          <FilterButton
            onClick={searchByInput}
            style={{ height: '50px', margin: '10px 5px 30px 10px' }}
          >
            OK
          </FilterButton>
        </FilterOptionsContainer>
      )}
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

      <StyledCenteredFlex>
        {
          (pages && createPaginationBtns(),
          nrOfPages.map((nr) => (
            <PaginationButton onClick={changePage} value={nr}>
              {nr}
            </PaginationButton>
          )))
        }
      </StyledCenteredFlex>
    </StyledArticlesWrapper>
  );
};
export default Articles;
