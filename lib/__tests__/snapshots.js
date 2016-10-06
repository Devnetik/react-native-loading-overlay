import {Text} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LoadingOverlay from '../loadingOverlay.js';

it('renders correctly without props', () => {
  const tree = renderer.create(<LoadingOverlay/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with children', () => {
  const tree = renderer.create(<LoadingOverlay><Text/></LoadingOverlay>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with different loading text', () => {
  const tree = renderer.create(<LoadingOverlay text={'load awesome data...'}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
