import React from 'react';
import { shallow } from 'enzyme';
import Offices, { StyledOfficesWrapper } from '../src/pages/Offices';
import Filter from '../src/components/Filter';
import { FilterButton } from '../src/styles/mainStyles';
import { StyledSelect } from '../src/styles/formStyles';

it('should display select when clicked', () => {
  const filter = shallow(<Filter />);
  expect(filter.exists(StyledSelect)).toEqual(false);
  filter.find(FilterButton).simulate('click');
  expect(filter.exists(StyledSelect)).toEqual(true);
});

it('should contain StyledOfficesWrapper', () => {
  const offices = shallow(<Offices />);
  expect(offices.exists(StyledOfficesWrapper)).toEqual(true);
});
