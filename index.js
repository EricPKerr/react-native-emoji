'use strict';

import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import nodeEmoji from 'node-emoji';

const keys = Object.keys(nodeEmoji.emoji);

const names = [
  ...keys,
  ...keys.map((key) => `:${key}:`)
];

const defaultStyle = {
  color: '#000'
};

const Emoji = ({name, style = {}, ...props}) => {
  style = {
    ...defaultStyle,
    ...style
  };

  return <Text style={style} {...props}>{ nodeEmoji.get(name) }</Text>
};

Emoji.propTypes = {
  ...Text.propTypes,
  name: PropTypes.oneOf(names).isRequired
};

export default Emoji;
