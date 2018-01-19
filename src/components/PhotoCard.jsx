let React = require('react');
let CreateReactClass = require('create-react-class');

let PhotoCard = CreateReactClass({
  render: function() {

    let divStyle = {
      marginTop: 10
    };

    return (
        <div className="card" style={divStyle}>
          <img className="card-img-top" src={this.props.source} alt="La Vie by Pablo Picasso" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
          </div>
        </div>
    );
  }
});

module.exports = PhotoCard;
