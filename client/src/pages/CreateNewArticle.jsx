import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm';
import { create } from '../utils/articleService';
import Upload from '../components/Upload';
import { useSetHeader } from '../context/HeaderProvider';

const CreateNewArticle = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [articleData, setArticleData] = useState(null);
  const [id, setImageId] = useState(null);

  const history = useHistory();
  const setHeader = useSetHeader();

  useEffect(() => {
    const setHeaderContent = () => {
      setHeader('Ny artikkel');
    };
    setHeaderContent();
  }, []);

  const submitNewArticle = async () => {
    if (
      articleData &&
      articleData.title &&
      articleData.ingress &&
      articleData.publishDate &&
      articleData.category &&
      articleData.author &&
      articleData.content
    ) {
      console.log(articleData);
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
      alert('Fyll ut alle felter!');
    }
  };

  return (
    <>
      <Upload id={id} setImageId={setImageId} />
      <ArticleForm
        submitNewArticle={submitNewArticle}
        articleData={articleData}
        setArticleData={setArticleData}
        id={id}
      />
    </>
  );
};

export default CreateNewArticle;
