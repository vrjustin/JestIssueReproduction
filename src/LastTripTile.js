import React from 'react';
import {View, Text} from 'react-native';
import Tile from './Tile';

const lastTripContent = (
  <View>
    <Text>This is the definition of a last trip.</Text>
  </View>
);

function LastTripTile() {
  return (
    <View>
      <Tile title="Last Trip Title" popoverContent={lastTripContent} />
    </View>
  );
}

export default LastTripTile;
