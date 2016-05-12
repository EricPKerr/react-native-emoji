var React = require('react-native');
var nodeEmoji = require('node-emoji');

class Emoji extends React.Component {
  render() {
    var emoji = nodeEmoji.get(this.props.name);
    return (<React.Text style={this.props.style}>{emoji}</React.Text>);
  }
}

Emoji.propTypes = {
  // Emoji's name
  name: React.PropTypes.string.isRequired,
  style: React.PropTypes.any
};

module.exports=Emoji;
