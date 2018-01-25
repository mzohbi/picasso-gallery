import React from 'react';

class PhotoCard extends React.Component {
  render() {

    const divStyle = {
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
}

module.exports = PhotoCard;
