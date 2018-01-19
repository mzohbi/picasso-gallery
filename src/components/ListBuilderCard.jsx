let React = require('react');
let CreateReactClass = require('create-react-class');
let List = require('./List.jsx');

let ListBuilderCard = CreateReactClass({
  getInitialState: function() {
    return {items: [], newItemText: ''};
  },

  onChange: function(e) {
    this.setState({newItemText: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();

    let currentItems = this.state.items;

    currentItems.push(this.state.newItemText);

    this.setState({items: currentItems, newItemText: ''});
  },

  render: function() {

    let divStyle = {
      background: "rgba(76, 76, 76, 0.9)",
      marginTop: 10,
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"
    };

    return(
      <div style={divStyle} className="card text-white">
          <div className="card-header">
            <h3>{this.props.title}</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                </div>
                <div className="col-3">
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
          </div>
          <List items={this.state.items} />
      </div>
    )
  }
});

module.exports = ListBuilderCard;
