import React from 'react';
import styled from 'styled-components';
import {
  StyledImage,
  StyledContainer,
  FilterContainer,
  FilterButton,
} from '../styles/MainStyles';
import {
  StyledListContainer,
  StyledListItem,
  StyledCardTitle,
  StyledCardInfo,
} from '../styles/ListStyles';

const StyledArticlesWrapper = styled(StyledContainer)`
  margin: 0 20px;
`;

const TitleContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
`;

const ArticleImage = styled(StyledImage)`
  border-radius: 10px;
  padding: 5px;
  width: 150px;
  height: 150px;
  display: block;
  margin: 10px;
  float: left;
`;

const ArticleIntroParagraph = styled(StyledCardInfo)`
  font-size: 18px;
  overflow: hidden;
`;

const NewArticleButton = styled(FilterButton)`
  background-color: #204051;
`;

const RightAlignContainer = styled(FilterContainer)`
  justify-content: flex-end;
`;

const LeftAlignContainer = styled(FilterContainer)`
  justify-content: flex-start;
`;

const SpacedFilterContainer = styled(FilterContainer)`
  justify-content: space-between;
  margin-bottom: 30px;
`;

const FullSizeListItem = styled(StyledListItem)`
  padding-right: 10px;
`;

const Articles = () => (
  <StyledArticlesWrapper>
    <SpacedFilterContainer>
      <LeftAlignContainer>
        <NewArticleButton>NY ARTIKKEL</NewArticleButton>
      </LeftAlignContainer>
      <RightAlignContainer>
        <FilterButton>SØK</FilterButton>
        <FilterButton>FILTER</FilterButton>
      </RightAlignContainer>
    </SpacedFilterContainer>
    <StyledListContainer>
      <FullSizeListItem>
        <ArticleImage src="https://media.gettyimages.com/photos/coffee-and-the-morning-paper-picture-id184993811?s=612x612" />
        <TitleContainer>
          <StyledCardTitle>Artikkeltittel</StyledCardTitle>
          <StyledCardInfo>Testing</StyledCardInfo>
        </TitleContainer>
        <ArticleIntroParagraph>
          I don't think anybody knows it was Russia that wrote Lorem Ipsum, but
          I don't know, maybe it was. It could be Russia, but it could also be
          China. It could also be lots of other people. It also could be some
          wordsmith sitting on their bed that weights 400 pounds. Ok? Trump
          Ipsum is calling for a total and complete shutdown of Muslim text
          entering your website.
        </ArticleIntroParagraph>
      </FullSizeListItem>
    </StyledListContainer>
  </StyledArticlesWrapper>
);

export default Articles;
