import React from 'react';

class InfoCard extends React.Component {
  render() {

    const divStyle = {
      marginTop: 10,
      paddingBottom: 90,
      paddingTop: 90,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
    };

    if (this.props.backgroundColour) {
      divStyle.backgroundColor = this.props.backgroundColour;
    }

    return (
      <div className="card text-white" style={divStyle}>
        <div className="card-body">
          <h1 className="card-title text-right">{this.props.title}</h1>
          <h6 className="card-subtitle mb-2 text-white text-right">{this.props.secondaryTitle}</h6>
        </div>
      </div>
    );
  }
}

module.exports = InfoCard;
