var React = require('react-native');
var nodeEmoji = require('node-emoji');

class Emoji extends React.Component {
  render() {
    var emoji = nodeEmoji.get(this.props.type);
    return (<React.Text {...this.props}>{emoji}</React.Text>);
  }
}

Emoji.propTypes = {
  // Emoji's name
  type: React.PropTypes.string.isRequired,
  // Style params
  style: React.PropTypes.object,
};

module.exports=Emoji;