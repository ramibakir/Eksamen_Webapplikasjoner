import React, {useState} from 'react';
import ArticleForm from '../components/ArticleForm';

const CreateNewArticle = () =>  
  /*const [error, setError] = useState(null);
  const [newArticle, setNewArticle] = useState(null);

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
  };*/

   (
  <>
    <ArticleForm />
  </>
)
  ;

export default CreateNewArticle;
