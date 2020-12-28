import React, { Component } from "react";
import "./Tour-list.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../TourData";

class TourList extends Component {
  state = {
    tour: tourData,
  };

  removeTour = (id) => {
    const { tour } = this.state;
    const sortedTour = tour.filter((tour) => tour.id !== id);
    // const { tour } = this.props.tour;
    // console.log(tour);
    this.setState({ tour: sortedTour });
  };
  render() {
    const tours = this.state.tour;
    console.log(tours);
    return (
      <section className="tour-list">
        {/* <Tour /> */}
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}

export default TourList;
