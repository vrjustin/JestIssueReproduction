import React from 'react';
import {Pressable, View} from 'react-native';
import TextWithPopover from './TextWithPopover';

function Tile({title, popoverContent}) {
  const popoverProps = {
    text: title,
    contentToPopover: popoverContent,
  };

  return (
    <Pressable onPress={() => console.log('Hello Tile Pressed')}>
      <View>{TextWithPopover(popoverProps)}</View>
    </Pressable>
  );
}

export default Tile;
