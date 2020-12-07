import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { StyledButton, StyledContainer } from '../styles/mainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  StyledSelect,
} from '../styles/formStyles.js';
import { listCategories, createCategory } from '../utils/categoryService.js';
import ModalForm from './ModalForm';
import { create } from '../utils/articleService';

const NewCategoryContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const NewCategoryButton = styled(StyledButton)`
  //width: 100%;
  //height: 50px;
  margin: 10px 0 30px 10px;
  flex: 1 1 auto;
  //padding: 10px;
`;

const CategorySelector = styled(StyledSelect)`
  width: 70%;
  margin: 10px 0 30px 0;
`;

const AuthorSelector = styled(StyledSelect)`
  width: 100%;
  margin: 10px 0 30px 0;
`;

const ArticleForm = () => {
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [newCategory, setNewCategory] = useState(null);
  const [success, setSuccess] = useState(false);

  const history = useHistory();

  const authorList = [
    { id: 'l', name: 'Lars Larsen' },
    { id: 'g', name: 'Gunn Gundersen' },
    { id: 's', name: 'Simen Simensen' },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await listCategories();
      if (error) {
        setError(error.statusCode);
      } else {
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  const toggleNewCategoryModal = () => {
    setModalVisibility((display) => !display);
  };

  /* useEffect(() => {
    setModalVisibility((display) => !display);
  }, [state]); */

  const submitNewCategory = async () => {
    if (newCategory.name) {
      const { error } = await createCategory(newCategory);
      if (error) {
        setError(error.statusCode);
      } else {
        alert('Ny kategori lagt til!');
      }
    } else {
      alert('Data mangler');
    }
  };

  const onSubmit = async (formData) => {
    const { data } = await create(formData);
    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        history.pushState(`/articles/${data.data.id}`);
      }, 2000);
    }
  };

  return (
    <>
      <StyledFormContainter>
        <ModalForm
          setNewCategory={setNewCategory}
          submitNewCategory={submitNewCategory}
        />
        <StyledForm>
          <StyledLabel htmlFor="title">Tittel</StyledLabel>
          <StyledInput type="text" placeholder="Tittel" />

          <StyledLabel htmlFor="ingress">Ingress</StyledLabel>
          <StyledInput type="text" placeholder="Ingress" />

          <StyledLabel htmlFor="date">Dato</StyledLabel>
          <StyledInput type="date" placeholder="Dato" />

          <StyledLabel htmlFor="category">Kategori</StyledLabel>
          <NewCategoryContainer>
            {error && <p>{error}</p>}
            <CategorySelector name="category">
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
          <StyledLabel htmlFor="author">Forfatter</StyledLabel>
          <AuthorSelector name="author">
            <option value="none" disabled defaultValue>
              -- Velg forfatter --
            </option>
            {authorList.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </AuthorSelector>
          <StyledLabel htmlFor="content">Innhold</StyledLabel>
          <StyledTextArea required type="text" placeholder="Innhold" />
          <StyledButton style={{ margin: '30px 0 50px 0' }} onClick={onSubmit}>
            OPPRETT ARTIKKEL
          </StyledButton>
        </StyledForm>
      </StyledFormContainter>
    </>
  );
};

export default ArticleForm;
