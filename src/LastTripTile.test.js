import React from 'react';
import {act} from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import LastTripTile from './LastTripTile';

describe('Last Trip Tile', () => {
  it('renders the UI correctly', () => {
    // const screen = renderWithProviders(<LastTripTile />);
    const screen = render(<LastTripTile />);
    act(() => {
      expect(screen).toMatchSnapshot();
    });
  });
});
