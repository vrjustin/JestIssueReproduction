import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Popover from 'react-native-popover-view';

function TextWithPopover(props) {
  const {text, contentToPopover} = props;
  return (
    <Popover
      from={
        <TouchableOpacity>
          <Text>{text}</Text>
        </TouchableOpacity>
      }>
      {contentToPopover}
    </Popover>
  );
}

export default TextWithPopover;
