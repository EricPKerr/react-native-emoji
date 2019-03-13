'use strict';

import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import nodeEmoji from 'node-emoji';

const names = Object.keys(nodeEmoji.emoji);

export default class Emoji extends PureComponent {
  static propTypes = {
    name: PropTypes.oneOf(names).isRequired,
    ...Text.propTypes
  };

  render() {
    const { name, ...props } = this.props;
    const emoji = nodeEmoji.get(name);

    return (<Text {...props}>{ emoji }</Text>);
  }
}
