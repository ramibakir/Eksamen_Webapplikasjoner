import React from 'react';
import styled from 'styled-components';
import {
  StyledParagraph,
  StyledButton,
  StyledSubtitle,
} from '../styles/MainStyles';

const TempContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const AuthorDateParagraph = styled(StyledParagraph)`
  font-size: 12px;
`;

const IntroParagraph = styled(StyledParagraph)`
  font-size: 18px;
`;

const DeleteButton = styled(StyledButton)`
  color: white;
  background-color: red;
`;

const EditButton = styled(StyledButton)`
  color: white;
  background-color: lightgreen;
`;

const ArticleDetailedView = () => (
  <>
    <TempContainer>
      <AuthorDateParagraph>Av Forfatternavn</AuthorDateParagraph>
      <AuthorDateParagraph>20.12.20</AuthorDateParagraph>
    </TempContainer>
    <IntroParagraph>
      I think the only difference between me and the other placeholder text is
      that I’m more honest and my words are more beautiful. I write the best
      placeholder text, and I'm the biggest developer on the web by far... While
      that's mock-ups and this is politics, are they really so different? An
      'extremely credible source' has called my office and told me that Lorem
      Ipsum's birth certificate is a fraud.
    </IntroParagraph>
    <StyledSubtitle>Subtittel</StyledSubtitle>
    <IntroParagraph>
      I think my strongest asset maybe by far is my temperament. I have a
      placeholding temperament. It’s about making placeholder text great again.
      That’s what people want, they want placeholder text to be great again.
      Look at these words. Are they small words? And he referred to my words -
      if they're small, something else must be small. I guarantee you there's no
      problem, I guarantee.
    </IntroParagraph>
    <IntroParagraph>
      I have a 10 year old son. He has words. He is so good with these words
      it's unbelievable. We are going to make placeholder text great again.
      Greater than ever before. I think my strongest asset maybe by far is my
      temperament. I have a placeholding temperament.
    </IntroParagraph>
    <StyledSubtitle>Subtittel 2</StyledSubtitle>
    <IntroParagraph>
      You're telling the enemy exactly what you're going to do. No wonder you've
      been fighting Lorem Ipsum your entire adult life. Look at these words. Are
      they small words? And he referred to my words - if they're small,
      something else must be small. I guarantee you there's no problem, I
      guarantee. I write the best placeholder text, and I'm the biggest
      developer on the web by far... While that's mock-ups and this is politics,
      are they really so different?
    </IntroParagraph>
    <AuthorDateParagraph>Kategorinavn</AuthorDateParagraph>
    <TempContainer>
      <DeleteButton>SLETT</DeleteButton>
      <EditButton>REDIGER</EditButton>
    </TempContainer>
  </>
);

export default ArticleDetailedView;
