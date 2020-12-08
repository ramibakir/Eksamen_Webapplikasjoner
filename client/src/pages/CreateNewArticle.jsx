import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CreateArticleForm from '../components/ArticleForm';
import { create } from '../utils/articleService';


const CreateNewArticle = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [articleData, setArticleData] = useState(null);

  const history = useHistory();

  const submitNewArticle = async () => {
    if (articleData) {
      console.log(articleData);
      const { data } = await create(articleData);
      if (!data.success) {
        setError(data.message);
      } else {
        setSuccess(true);
        setError(null);
        setTimeout(() => {
          history.pushState(`/articles/${data.data.id}`);
        }, 2000);
      }
    } else {
      console.log('no form data');
    }
  };

  return (
    <>
      <ArticleForm
        submitNewArticle={submitNewArticle}
        articleData={articleData}
        setArticleData={setArticleData}
      />
    </>
  );
};


export default CreateNewArticle;
