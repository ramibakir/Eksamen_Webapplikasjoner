import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CreateArticleForm from '../components/ArticleForm';
import { create } from '../utils/articleService';

const CreateNewArticle = () => (
  <>
    <CreateArticleForm />
  </>
);

export default CreateNewArticle;
