'use strict';

import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import nodeEmoji from 'node-emoji';

class Emoji extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    const { name, ...props } = this.props;
    const emoji = nodeEmoji.get(name);

    return (<Text {...props}>{ emoji }</Text>);
  }
}

export default Emoji;
