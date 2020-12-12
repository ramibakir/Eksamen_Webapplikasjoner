import styled from 'styled-components';
import {
  StyledImage,
  StyledContainer,
  FilterContainer,
  FilterButton,
  StyledButton,
  StyledParagraph,
} from './mainStyles';
import { StyledSelect } from './formStyles';

import { StyledListItem, StyledCardInfo } from './listStyles';

export const StyledArticleContainer = styled(StyledContainer)``;

export const StyledArticlesWrapper = styled(StyledContainer)`
  margin: 0 5%;
`;

export const ArticleContentContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10px;
`;

export const ArticleImage = styled(StyledImage)`
  border-radius: 10px;
  padding: 5px;
  width: 150px;
  height: 150px;
  display: block;
  margin: 10px;
  float: left;
  object-fit: cover;
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
  padding: 10px;
  justify-content: flex-start;
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

export const SecrecySelector = styled(StyledSelect)`
  width: 100%;
  margin: 10px 0 30px 0;
`;

export const ArticleDataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 30px 0 10px 0;
`;

export const AuthorDateParagraph = styled(StyledParagraph)`
  font-size: 14px;
  margin-top: 5px;
`;

export const IntroParagraph = styled(StyledParagraph)`
  font-size: 18px;
  margin: 20px 0;
  font-weight: bold;
  color: #204051;
`;

export const ContentParagraph = styled(StyledParagraph)`
  font-size: 18px;
  margin: 20px 0;
`;

export const DeleteButton = styled(StyledButton)`
  color: #204051;
  background-color: #84a9ac;
  text-transform: uppercase;
`;

export const EditButton = styled(StyledButton)`
  color: white;
  background-color: #204051;
  margin-left: 0px;
  margin-right: 10px;
  text-transform: uppercase;
`;
