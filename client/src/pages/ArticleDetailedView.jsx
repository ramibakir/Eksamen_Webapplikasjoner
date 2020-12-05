import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  StyledParagraph,
  StyledButton,
  StyledSubtitle,
  StyledDetailViewWrapper,
} from '../styles/MainStyles';

const ArticleDataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 30px 0 10px 0;
`;

const AuthorDateParagraph = styled(StyledParagraph)`
  font-size: 14px;
`;

const IntroParagraph = styled(StyledParagraph)`
  font-size: 18px;
  margin: 20px 0;
`;

const DeleteButton = styled(StyledButton)`
  color: #204051;
  background-color: #84a9ac;
`;

const EditButton = styled(StyledButton)`
  color: white;
  background-color: #204051;
  margin-left: 0px;
  margin-right: 10px;
`;

const ArticleDetailedView = () => {
  const tempArticlesList = [
    { id: 1, author: 'Lars Larsen', date: '20.12.20' },
    { id: 2, author: 'Gunn Gundersen', date: '21.11.20' },
    { id: 3, author: 'Simen Simensen', date: '22.10.20' },
  ];

  const { id } = useParams();

  const articleData = tempArticlesList.filter((article) => article.id == id);

  return (
    <StyledDetailViewWrapper>
      <ArticleDataContainer>
        <AuthorDateParagraph>
          Av {articleData[0].author} den {articleData[0].date}
        </AuthorDateParagraph>
      </ArticleDataContainer>
      <IntroParagraph>
        Artikkel {articleData[0].id}. I think the only difference between me and
        the other placeholder text is that I’m more honest and my words are more
        beautiful. I write the best placeholder text, and I'm the biggest
        developer on the web by far... While that's mock-ups and this is
        politics, are they really so different? An 'extremely credible source'
        has called my office and told me that Lorem Ipsum's birth certificate is
        a fraud.
      </IntroParagraph>
      <StyledSubtitle>Subtittel</StyledSubtitle>
      <IntroParagraph>
        I think my strongest asset maybe by far is my temperament. I have a
        placeholding temperament. It’s about making placeholder text great
        again. That’s what people want, they want placeholder text to be great
        again. Look at these words. Are they small words? And he referred to my
        words - if they're small, something else must be small. I guarantee you
        there's no problem, I guarantee.
      </IntroParagraph>
      <IntroParagraph>
        I have a 10 year old son. He has words. He is so good with these words
        it's unbelievable. We are going to make placeholder text great again.
        Greater than ever before. I think my strongest asset maybe by far is my
        temperament. I have a placeholding temperament.
      </IntroParagraph>
      <StyledSubtitle>Subtittel 2</StyledSubtitle>
      <IntroParagraph>
        You're telling the enemy exactly what you're going to do. No wonder
        you've been fighting Lorem Ipsum your entire adult life. Look at these
        words. Are they small words? And he referred to my words - if they're
        small, something else must be small. I guarantee you there's no problem,
        I guarantee. I write the best placeholder text, and I'm the biggest
        developer on the web by far... While that's mock-ups and this is
        politics, are they really so different?
      </IntroParagraph>
      <AuthorDateParagraph>Kategorinavn</AuthorDateParagraph>
      <ArticleDataContainer>
        <EditButton>REDIGER</EditButton>
        <DeleteButton>SLETT</DeleteButton>
      </ArticleDataContainer>
    </StyledDetailViewWrapper>
  );
};

export default ArticleDetailedView;
