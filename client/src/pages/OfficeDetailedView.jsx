import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  StyledSubtitle,
  StyledParagraph,
  StyledImage,
  StyledHeader,
} from '../styles/MainStyles';
import { StyledGridContainer, StyledCardItem } from '../styles/ListStyles';

const EmployeeImage = styled(StyledImage)`
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  display: block;
  margin: 0 auto;
`;

const IntroParagraph = styled(StyledParagraph)`
  font-size: 18px;
`;

const EmployeeParagraph = styled(StyledParagraph)`
  font-size: 14px;
`;

const BottomHeader = styled(StyledHeader)`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OfficeDetailedView = () => {
  const officeList = [
    { id: 'fr', place: 'Fredrikstad', officeNr: [1, 2, 3, 4, 5, 6, 7, 8] },
    { id: 'sa', place: 'Sarpsborg', officeNr: [1, 2, 3, 4, 5] },
    { id: 'mo', place: 'Moss', officeNr: [1, 2, 3, 4] },
    { id: 'os', place: 'Oslo', officeNr: [1, 2, 3, 4] },
  ];

  const { id } = useParams();

  const paramId = id.substr(0, 2);
  const paramNr = id.substr(2, 1);

  const officeLocation = officeList.filter(
    (officePlace) => officePlace.id === paramId
  );

  // eslint-disable-next-line eqeqeq
  const officeNumber = officeLocation[0].officeNr.filter((nr) => nr == paramNr);

  return (
    <>
      <StyledSubtitle>
        Velkommen til Rørlegger {officeNumber} i {officeLocation[0].place}
      </StyledSubtitle>

      <IntroParagraph>
        And the gratitude I get is this charlatan chose not to do his job, which
        is to WRITE. Clearly, someone who believes he is above the law. Well,
        you've been warned, dude. Bring it. Check it, Alex, I embarrassed him in
        front of his children and the world by healing at a pace that his
        unevolved mind can't process. Okay ... last I checked, Chaim, I've spent
        close to the last decade, I don't know, effortless and magically
        converting your tin cans into pure gold.
      </IntroParagraph>
      <StyledSubtitle>Våre ansatte</StyledSubtitle>
      <StyledGridContainer>
        <StyledCardItem>
          <EmployeeImage src="https://c8.alamy.com/comp/BP35EX/ripe-grapefruit-with-a-person-smiling-girl-computer-assembly-on-a-BP35EX.jpg" />
          <EmployeeParagraph>Ansatt Ansattnavn</EmployeeParagraph>
          <EmployeeParagraph>Stilling</EmployeeParagraph>
        </StyledCardItem>
      </StyledGridContainer>
      <BottomHeader>
        <h2>Kontakt oss på 69 99 00 00</h2>
      </BottomHeader>
    </>
  );
};

export default OfficeDetailedView;
