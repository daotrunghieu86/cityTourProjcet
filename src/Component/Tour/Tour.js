import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };
  handle = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    console.log(this.props);
    return (
      <div className="tour">
        <div className="img-container">
          <img src={img} alt="lammom" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="info-tour">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            Info{" "}
            <i onClick={this.handle} className="fas fa-caret-square-down"></i>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </div>
    );
  }
}
