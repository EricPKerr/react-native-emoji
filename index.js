import React from 'react';
import { Text } from 'react-native';

var nodeEmoji = require('node-emoji');

class Emoji extends React.Component {
  render() {
    var emoji = nodeEmoji.get(this.props.name);
    return (<Text>{emoji}</Text>);
  }
}

Emoji.propTypes = {
  // Emoji's name
  name: React.PropTypes.string.isRequired,
};

module.exports=Emoji;