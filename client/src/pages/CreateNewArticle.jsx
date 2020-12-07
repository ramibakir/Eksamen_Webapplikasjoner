import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm';
import { create } from '../utils/articleService';

const CreateNewArticle = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState(null);

  const history = useHistory();

  const onSubmit = async () => {
    if (formData) {
      console.log(formData);
      const { data } = await create(formData);
      if (!data.success) {
        setError(data.message);
      } else {
        setSuccess(true);
        setError(null);
        /* setTimeout(() => {
          history.pushState(`/articles/${data.data.id}`);
        }, 2000); */
      }
    } else {
      console.log('no form data');
    }
  };

  return (
    <>
      <ArticleForm
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
};

export default CreateNewArticle;
