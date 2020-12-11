import React from 'react';
import styled from 'styled-components';
import ReorderIcon from '@material-ui/icons/Reorder';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { FilterContainer, FilterButton } from '../styles/mainStyles';
import { StyledSelect } from '../styles/formStyles';

const RightAlignedFilter = styled(FilterContainer)`
  justify-content: flex-end;
  margin: 20px 20px 0 0;
`;

const Filter = ({
  filterBox,
  filter,
  officeList,
  selectOffices,
  toggleFilterBox,
  cardView,
  toggleCardView,
}) => (
  <RightAlignedFilter>
    {filterBox && (
      <StyledSelect onChange={filter}>
        <option value="all">Se alle</option>
        {officeList.map((office) => (
          <option value={office.id}>{office.place}</option>
        ))}
      </StyledSelect>
    )}
    <FilterButton onClick={toggleFilterBox}>Filter</FilterButton>
    {cardView ? (
      <ReorderIcon
        fontSize="large"
        onClick={toggleCardView}
        style={{ cursor: 'pointer' }}
      />
    ) : (
      <ViewModuleIcon
        fontSize="large"
        onClick={toggleCardView}
        style={{ cursor: 'pointer' }}
      />
    )}
  </RightAlignedFilter>
);

export default Filter;
