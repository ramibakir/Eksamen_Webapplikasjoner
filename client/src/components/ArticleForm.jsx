import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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

const NewCategoryContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const NewCategoryButton = styled(StyledButton)`
  margin: 10px 0 30px 10px;
  flex: 1 1 auto;
`;

const CategorySelector = styled(StyledSelect)`
  width: 70%;
  margin: 10px 0 30px 0;
`;

const AuthorSelector = styled(StyledSelect)`
  width: 100%;
  margin: 10px 0 30px 0;
`;

const ArticleForm = ({ onSubmit, formData, setFormData }) => {
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [newCategory, setNewCategory] = useState(null);

  const authorList = [
    { id: 'l', name: 'Lars Larsen' },
    { id: 'g', name: 'Gunn Gundersen' },
    { id: 's', name: 'Simen Simensen' },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault(event);
    setFormData({ ...formData, [event.target.name]: event.target.value });
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

  return (
    <>
      <StyledFormContainter>
        <ModalForm
          setNewCategory={setNewCategory}
          submitNewCategory={submitNewCategory}
        />
        <StyledForm>
          <StyledLabel htmlFor="title">Tittel</StyledLabel>
          <StyledInput
            type="text"
            placeholder="Tittel"
            name="title"
            onChange={handleSubmit}
          />

          <StyledLabel htmlFor="ingress">Ingress</StyledLabel>
          <StyledInput
            type="text"
            placeholder="Ingress"
            name="ingress"
            onChange={handleSubmit}
          />

          <StyledLabel htmlFor="date">Dato</StyledLabel>
          <StyledInput
            type="date"
            placeholder="Dato"
            name="publishDate"
            onChange={handleSubmit}
          />

          <StyledLabel htmlFor="category">Kategori</StyledLabel>
          <NewCategoryContainer>
            {error && <p>{error}</p>}
            <CategorySelector name="category" onChange={handleSubmit}>
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
          <AuthorSelector name="author" onChange={handleSubmit}>
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
          <StyledTextArea
            required
            type="text"
            placeholder="Innhold"
            name="content"
            onChange={handleSubmit}
          />
          <StyledButton
            style={{ margin: '30px 0 50px 0' }}
            onClick={() => onSubmit()}
          >
            OPPRETT ARTIKKEL
          </StyledButton>
        </StyledForm>
      </StyledFormContainter>
    </>
  );
};

export default ArticleForm;
