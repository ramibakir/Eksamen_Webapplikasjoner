import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/Header';
import { useSetHeader } from '../src/context/HeaderProvider';

// funker ikke
it('should contain title', () => {
  const header = shallow(<Header />);

  const setHeader = useSetHeader();
  setHeader({ title: 'test', image: '' });

  expect(header.find('h1').text()).toEqual('test');
});
