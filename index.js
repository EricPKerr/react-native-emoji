import React from 'react';
import { Text } from 'react-native';
import nodeEmoji from 'node-emoji';

class Emoji extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
  }

  render() {
    const emoji = nodeEmoji.get(this.props.name);
    return (<Text style={this.props.style}>{ emoji }</Text>);
  }
}

export default Emoji;
