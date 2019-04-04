'use strict';

import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import nodeEmoji from 'node-emoji';

const names = Object.keys(nodeEmoji.emoji);

const Emoji = ({name, ...props}) => (
  <Text {...props}>{ nodeEmoji.get(name) }</Text>
);

Emoji.propTypes = {
  ...Text.propTypes,
  name: PropTypes.oneOf(names).isRequired
}

export default Emoji;
