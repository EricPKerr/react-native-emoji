import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import nodeEmoji from 'node-emoji';

class Emoji extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    const emoji = nodeEmoji.get(this.props.name);
    return (<Text style={this.props.style}>{ emoji }</Text>);
  }
}

export default Emoji;
