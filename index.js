var React = require('react-native');
var nodeEmoji = require('node-emoji');

class Emoji extends React.Component {
  render() {
    var emoji = nodeEmoji.get(this.props.name);
    return (<React.Text>{emoji}</React.Text>);
  }
}

Emoji.propTypes = {
  // Emoji's name
  name: React.PropTypes.string.isRequired,
};

module.exports=Emoji;