import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledContainer } from '../styles/mainStyles';
import CardView from '../components/CardView';
import ListView from '../components/ListView';
import Filter from '../components/Filter';

const StyledOfficesWrapper = styled(StyledContainer)`
  margin: 20px 5%;
`;

const fullOfficeList = [
  { id: 'fr', place: 'Fredrikstad', officeNr: [1, 2, 3, 4, 5, 6, 7, 8] },
  { id: 'sa', place: 'Sarpsborg', officeNr: [1, 2, 3, 4, 5] },
  { id: 'mo', place: 'Moss', officeNr: [1, 2, 3, 4] },
  { id: 'os', place: 'Oslo', officeNr: [1, 2, 3, 4] },
];

const Offices = () => {
  const [cardView, setCardView] = useState(false);
  const [filterBox, setFilterBox] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState('all');
  const [officeList, setOfficeList] = useState([
    { id: 'fr', place: 'Fredrikstad', officeNr: [1, 2, 3, 4, 5, 6, 7, 8] },
    { id: 'sa', place: 'Sarpsborg', officeNr: [1, 2, 3, 4, 5] },
    { id: 'mo', place: 'Moss', officeNr: [1, 2, 3, 4] },
    { id: 'os', place: 'Oslo', officeNr: [1, 2, 3, 4] },
  ]);

  // let filteredOffices = officeList;

  const toggleCardView = () => {
    setCardView((display) => !display);
  };

  const toggleFilterBox = () => {
    setFilterBox((display) => !display);
  };

  // funker ikke, den vil ikke endre state på officeList til den filtrerte lista
  const filter = (event) => {
    console.log(event.target.value);
    setFilterCriteria(event.target.value);

    const filteredOffices = officeList.filter(
      (office) => office.id === event.target.value
    );

    setOfficeList(filteredOffices);

    console.log(filteredOffices);

    if (event.target.value !== 'all') {
      setOfficeList(fullOfficeList);
    }

    console.log(officeList);
  };

  return (
    <StyledOfficesWrapper>
      <Filter
        filterBox={filterBox}
        filter={filter}
        officeList={officeList}
        toggleFilterBox={toggleFilterBox}
        cardView={cardView}
        toggleCardView={toggleCardView}
      />

      {cardView
        ? officeList.map((office) => <CardView office={office} />)
        : officeList.map((office) => <ListView office={office} />)}
    </StyledOfficesWrapper>
  );
};

export default Offices;
