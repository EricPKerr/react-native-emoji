import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import nodeEmoji from 'node-emoji';

class Emoji extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    const { name, style } = this.props;

    const emoji = nodeEmoji.get(name);

    return (
      <Text style={style}>{emoji}</Text>
    );
  }
}

export default Emoji;
