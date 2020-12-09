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

const Upload = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [id, setImageId] = useState(null);
  const [src, setSrc] = useState(null);

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

  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  const downloadImage = async () => {
    const { data } = await download(id);
    console.log(data);
    // const img = await data.arrayBuffer().then((buffer) => {
    //   const base64Flag = 'data:image/jpeg;base64,';
    //   const imageStr = arrayBufferToBase64(buffer);
    //   return base64Flag + imageStr;
    // });

    const imgUrl = `${process.env.BASE_URL}/${data?.data?.imagePath}`;
    setSrc(imgUrl);
  };
  return (
    <>
      {src && <img alt="my" src={src} />}
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
