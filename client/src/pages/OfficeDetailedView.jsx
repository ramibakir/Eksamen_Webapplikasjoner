import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  StyledSubtitle,
  StyledParagraph,
  StyledImage,
  StyledHeader,
  StyledDetailViewWrapper,
} from '../styles/mainStyles';
import {
  StyledGridContainer,
  StyledCardItem,
  StyledCardInfo,
} from '../styles/listStyles';

const StyledEmpoyeeGrid = styled(StyledGridContainer)`
  margin: 20px 0;
`;

const EmployeeImage = styled(StyledImage)`
  border-radius: 10px;
  padding: 5px;
  width: 150px;
  display: block;
  margin: 0 auto;
`;

const IntroParagraph = styled(StyledParagraph)`
  font-size: 18px;
  margin: 10px 0 30px 0;
`;

const StyledEmployeeInfo = styled(StyledCardInfo)`
  text-align: center;
`;

const BottomHeader = styled(StyledHeader)`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
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
    <StyledDetailViewWrapper>
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
      <StyledEmpoyeeGrid>
        <StyledCardItem>
          <EmployeeImage src="https://c8.alamy.com/comp/BP35EX/ripe-grapefruit-with-a-person-smiling-girl-computer-assembly-on-a-BP35EX.jpg" />
          <StyledEmployeeInfo>Ansatt Ansattnavn</StyledEmployeeInfo>
          <StyledEmployeeInfo>Stilling</StyledEmployeeInfo>
        </StyledCardItem>
      </StyledEmpoyeeGrid>
      <BottomHeader>
        <h2>Kontakt oss på 69 99 00 00</h2>
      </BottomHeader>
    </StyledDetailViewWrapper>
  );
};

export default OfficeDetailedView;
