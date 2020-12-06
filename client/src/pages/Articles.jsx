import React from 'react';
import styled from 'styled-components';
import {
  StyledImage,
  StyledParagraph,
  StyledHeader,
  StyledButton,
} from '../styles/MainStyles';
import { StyledListContainer, StyledListItem } from '../styles/ListStyles';

const TempContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArticleImage = styled(StyledImage)`
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  height: 150px;
  display: block;
  margin: 10px;
  float: left;
`;

const ArticleIntroParagraph = styled(StyledParagraph)`
  font-size: 18px;
  overflow: hidden;
`;

const CategoryParagraph = styled(StyledParagraph)`
  font-size: 12px;
`;

const NewArticleButton = styled(StyledButton)`
  font-weight: 700;
`;

const SearchButton = styled(StyledButton)`
  color: black;
  background-color: lightgrey;
`;

const Articles = () => (
  <>
    <TempContainer>
      <NewArticleButton>NY ARTIKKEL</NewArticleButton>
      <TempContainer>
        <SearchButton>SØK</SearchButton>
        <SearchButton>FILTER</SearchButton>
      </TempContainer>
    </TempContainer>
    <StyledListContainer>
      <StyledListItem>
        <ArticleImage src="https://media.gettyimages.com/photos/coffee-and-the-morning-paper-picture-id184993811?s=612x612" />
        <TempContainer>
          <StyledParagraph>Artikkeltittel</StyledParagraph>
          <CategoryParagraph>Testing</CategoryParagraph>
        </TempContainer>
        <ArticleIntroParagraph>
          I don't think anybody knows it was Russia that wrote Lorem Ipsum, but
          I don't know, maybe it was. It could be Russia, but it could also be
          China. It could also be lots of other people. It also could be some
          wordsmith sitting on their bed that weights 400 pounds. Ok? Trump
          Ipsum is calling for a total and complete shutdown of Muslim text
          entering your website.
        </ArticleIntroParagraph>
      </StyledListItem>
    </StyledListContainer>
  </>
);

export default Articles;
