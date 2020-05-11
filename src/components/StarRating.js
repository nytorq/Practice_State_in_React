/*jshint esversion: 6 */


import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  };

  // Write a function that returns 5 Star components

  renderStars = () => {
    let stars = [];
    let maxStars = 5;

    for (let i = 0 ; i < maxStars ; i++) {
      stars.push(
        <Star
          key={i}
          setRating={ () => this.handleSetRating(i + 1) }
          isSelected={this.state.rating > i}
        />
      );
    }

    return stars;
  }

  // Write an event handler that updates the rating state.

  handleStarRating = (key) => {
    console.log("You've clicked star " + key)
  }

  handleSetRating = (rating) => {
    if (this.state.rating === rating) {
      this.setState({rating: 0});
    } else {
        this.setState({rating})
    }
  }

  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {this.renderStars()}
      </ul>
    );
  }
}

export default StarRating;
