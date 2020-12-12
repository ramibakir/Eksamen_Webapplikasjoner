import React from 'react';
import { shallow, mount } from 'enzyme';
import CardView from '../src/components/CardView';
import ListView from '../src/components/ListView';
import { StyledGridContainer, StyledCardInfo } from '../src/styles/listStyles.js';
import { StyledSubtitle } from '../src/styles/mainStyles.js';

describe('<CardView />', () => {
  it('should contain subtitle with office place and number of offices', () => {
    const wrapper = shallow(<CardView />);

    expect(wrapper.find(StyledSubtitle).text()).toContain(
      'Fredrikstad (8 kontorer)'
    );
  });
});

describe('<ListView />', () => {
  it('should contain subtitle with office place and number of offices', () => {
    const wrapper = shallow(<ListView />);
    expect(wrapper.find(StyledSubtitle).text()).toContain(
      'Fredrikstad (8 kontorer)'
    );
  });
});
