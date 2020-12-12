import React, { useEffect, useState } from 'react';
import { StyledButton, StyledCenteredFlex } from '../styles/mainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledLabel,
} from '../styles/formStyles.js';
import {
  NewCategoryContainer,
  NewCategoryButton,
  CategorySelector,
  AuthorSelector,
  SecrecySelector,
} from '../styles/ArticleStyles';
import { listCategories, createCategory } from '../utils/categoryService.js';
import ModalForm from './ModalForm';

const ArticleForm = ({ submitNewArticle, articleData, setArticleData, id }) => {
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [newCategory, setNewCategory] = useState(null);

  const authorList = [
    { id: 'l', name: 'Lars Larsen' },
    { id: 'g', name: 'Gunn Gundersen' },
    { id: 's', name: 'Simen Simensen' },
  ];

  const updateArticleData = (event) => {
    event.preventDefault();

    setArticleData({
      ...articleData,
      [event.target.name]: event.target.value,
      image: id,
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await listCategories();
      if (!data) {
        setError(error);
      } else {
        setCategories(data);
        setError(null);
      }
    };
    fetchCategories();
  }, []);

  const toggleNewCategoryModal = () => {
    setModalVisibility((display) => !display);
  };

  const updateCategories = async () => {
    const { data, error } = await listCategories();
    if (!data) {
      setError(error);
    } else {
      setCategories(data);
      setError(null);
    }
  };

  const submitNewCategory = async () => {
    if (newCategory.name) {
      const { error } = await createCategory(newCategory);
      if (error) {
        setError(error.statusCode);
      } else {
        updateCategories();
        toggleNewCategoryModal();
      }
    } else {
      alert('Data mangler');
    }
  };

  return (
    <>
      <StyledFormContainter>
        <StyledForm>
          <StyledLabel htmlFor="title">Tittel</StyledLabel>
          <StyledInput
            type="text"
            placeholder="Tittel"
            name="title"
            onChange={updateArticleData}
          />

          <StyledLabel htmlFor="ingress">Ingress</StyledLabel>
          <StyledInput
            type="text"
            placeholder="Ingress"
            name="ingress"
            onChange={updateArticleData}
          />

          <StyledLabel htmlFor="date">Dato</StyledLabel>
          <StyledInput
            type="date"
            placeholder="Dato"
            name="publishDate"
            onChange={updateArticleData}
          />

          <StyledLabel htmlFor="category">Kategori</StyledLabel>
          <NewCategoryContainer>
            {error && <p>{error}</p>}
            <CategorySelector
              name="category"
              defaultValue="none"
              onChange={updateArticleData}
            >
              <option value="none" disabled>
                -- Velg kategori --
              </option>
              {categories &&
                categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
            </CategorySelector>
            <NewCategoryButton onClick={toggleNewCategoryModal}>
              NY
            </NewCategoryButton>
          </NewCategoryContainer>
          {modalVisibility && (
            <ModalForm
              setNewCategory={setNewCategory}
              submitNewCategory={submitNewCategory}
              toggleNewCategoryModal={toggleNewCategoryModal}
            />
          )}
          <StyledLabel htmlFor="author">Forfatter</StyledLabel>
          <AuthorSelector
            name="author"
            defaultValue="none"
            onChange={updateArticleData}
          >
            <option value="none" disabled>
              -- Velg forfatter --
            </option>
            {authorList.map((author) => (
              <option key={author.id} value={author.name}>
                {author.name}
              </option>
            ))}
          </AuthorSelector>
          <StyledLabel htmlFor="content">Innhold</StyledLabel>
          <StyledTextArea
            required
            type="text"
            placeholder="Innhold"
            name="content"
            onChange={updateArticleData}
          />
          <SecrecySelector
            name="hidden"
            defaultValue="none"
            onChange={updateArticleData}
          >
            <option value="none" disabled>
              -- Velg visning --
            </option>
            <option value="false">Ikke hemmelig</option>
            <option value="true">Hemmelig</option>
          </SecrecySelector>
        </StyledForm>
        <StyledCenteredFlex>{/* <Upload /> */}</StyledCenteredFlex>
        <StyledCenteredFlex>
          <StyledButton
            style={{ margin: '30px 0 50px 0' }}
            onClick={() => submitNewArticle()}
          >
            OPPRETT ARTIKKEL
          </StyledButton>
        </StyledCenteredFlex>
      </StyledFormContainter>
    </>
  );
};

export default ArticleForm;
