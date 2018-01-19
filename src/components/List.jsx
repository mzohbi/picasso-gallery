let React = require('react');
let CreateReactClass = require('create-react-class');
let ListItem = require('./ListItem.jsx');

let List = CreateReactClass({
  render: function() {

    let createItem = function(text, index) {
      return <ListItem key={index + text} text={text} />;
    };

    return (<ul>{this.props.items.map(createItem)}</ul>);
  }
});

module.exports = List;
