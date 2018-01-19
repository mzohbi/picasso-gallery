let React = require('react');
let CreateReactClass = require('create-react-class');

let ListItem = CreateReactClass({
  render: function() {
    return (
        <li>
          <h4>{this.props.text}</h4>
        </li>
    );
  }
});

module.exports = ListItem;
