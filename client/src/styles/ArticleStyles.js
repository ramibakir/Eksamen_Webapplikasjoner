import styled from 'styled-components';
import {
  StyledImage,
  StyledContainer,
  FilterContainer,
  FilterButton,
  StyledButton,
} from './mainStyles';
import { StyledSelect } from './formStyles';

import { StyledListItem, StyledCardInfo } from './listStyles';

export const StyledArticleContainer = styled(StyledContainer)``;

export const StyledMainContent = styled.div``;

export const StyledArticlesWrapper = styled(StyledContainer)`
  margin: 0 5%;
`;

export const TitleContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
`;

export const ArticleImage = styled(StyledImage)`
  border-radius: 10px;
  padding: 5px;
  width: 150px;
  height: 150px;
  display: block;
  margin: 10px;
  float: left;
`;

export const ArticleIntroParagraph = styled(StyledCardInfo)`
  font-size: 18px;
  overflow: hidden;
`;

export const NewArticleButton = styled(FilterButton)`
  background-color: #204051;
`;

export const RightAlignContainer = styled(FilterContainer)`
  justify-content: flex-end;
`;

export const LeftAlignContainer = styled(FilterContainer)`
  justify-content: flex-start;
`;

export const SpacedFilterContainer = styled(FilterContainer)`
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const FullSizeListItem = styled(StyledListItem)`
  padding-right: 10px;
`;

export const NewCategoryContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const NewCategoryButton = styled(StyledButton)`
  margin: 10px 0 30px 10px;
  flex: 1 1 auto;
`;

export const CategorySelector = styled(StyledSelect)`
  width: 70%;
  margin: 10px 0 30px 0;
`;

export const AuthorSelector = styled(StyledSelect)`
  width: 100%;
  margin: 10px 0 30px 0;
`;
