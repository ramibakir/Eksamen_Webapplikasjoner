import React, { useState } from 'react';
import styled from 'styled-components';
import { upload, download } from '../utils/imageService';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../styles/formStyles.js';
import { StyledButton } from '../styles/mainStyles.js';

const Upload = ({ id, setImageId }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState();
  // const [id, setImageId] = useState(null);
  const [src, setSrc] = useState(null);
  const [articleData, setArticleData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await upload(file);
    if (!data.success) {
      setError(data.message);
    } else {
      setImageId(data?.data?._id);
      setSuccess(true);
      setError(null);
    }
  };

  const downloadImage = async () => {
    const { data } = await download(id);
    const imgUrl = `${process.env.BASE_URL}/${data?.data?.imagePath}`;
    setSrc(imgUrl);
    setArticleData({ ...articleData, image: imgUrl });
  };
  return (
    <>
      {/* {src && <img alt="my" src={src} />} */}
      {success && (
        <p>
          Bilde lastet opp med{' '}
          <StyledButton type="button" onClick={downloadImage}>
            {id}
          </StyledButton>
        </p>
      )}
      {error && <p>Noe gikk galt med opplastingen</p>}
      <StyledForm
        encType="multipart/form-data"
        method="post"
        onSubmit={handleSubmit}
      >
        <StyledLabel htmlFor="image">Last opp bilde</StyledLabel>
        <StyledInput
          type="file"
          id="image"
          name="image"
          accept=".jpg"
          onChange={(event) => {
            const imageFile = event.target.files[0];
            setFile(imageFile);
          }}
        />
        <StyledButton type="submit">Lagre</StyledButton>
      </StyledForm>
    </>
  );
};

export default Upload;
