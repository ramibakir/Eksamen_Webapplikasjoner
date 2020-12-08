import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { create } from '../utils/eventService';
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

const CreateArticleForm = () => {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [newCategory, setNewCategory] = useState(null);

  const authorList = [
    { id: 'l', name: 'Lars Larsen' },
    { id: 'g', name: 'Gunn Gundersen' },
    { id: 's', name: 'Simen Simensen' },
  ];

  const history = useHistory();

  const { register, errors, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  const testSubmit = (event) => {
    event.preventDefault();
  };

  const toggleNewCategoryModal = () => {
    setModalVisibility((display) => !display);
  };

  const onSubmit = async (formData) => {
    const { data } = await create(formData);
    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        history.push(`/articles/${data.data.id}`);
      }, 2000);
    }
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
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel htmlFor="title">Tittel</StyledLabel>
          <StyledInput
            type="text"
            placeholder="Tittel"
            name="title"
            ref={register({ required: true })}
          />

          <StyledLabel htmlFor="ingress">Ingress</StyledLabel>
          <StyledInput
            type="text"
            placeholder="Ingress"
            name="ingress"
            ref={register({ required: true })}
          />

          <StyledLabel htmlFor="date">Dato</StyledLabel>
          <StyledInput
            type="date"
            placeholder="Dato"
            name="publishDate"
            ref={register({ required: true })}
          />

          <StyledLabel htmlFor="category">Kategori</StyledLabel>
          <NewCategoryContainer>
            {error && <p>{error}</p>}
            <CategorySelector name="category" onChange={testSubmit}>
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
          <AuthorSelector name="author" onChange={testSubmit}>
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
            ref={register({ required: true })}
          />
          <StyledButton
            style={{ margin: '30px 0 50px 0' }}
            type="submit"
            isLoading={formState.isSubmitting}
          >
            OPPRETT ARTIKKEL
          </StyledButton>
        </StyledForm>
      </StyledFormContainter>
    </>
  );
};

export default CreateArticleForm;
