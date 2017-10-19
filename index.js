import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import nodeEmoji from 'node-emoji';

class Emoji extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    const emoji = nodeEmoji.get(this.props.name);
    return (<Text>{ emoji }</Text>);
  }
}

export default Emoji;
