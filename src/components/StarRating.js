import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    stars: [
      {
        id: 1,
        class: 'unselected'
      },{
        id: 2,
        class: 'unselected'
      },
      {
        id: 3,
        class: 'unselected'
      },
      {
        id: 4,
        class: 'unselected'
      },
      {
        id: 5,
        class: 'unselected'
      },
    ]
  };

  // Write a function that returns 5 Star components
  starRenderer = () => {
    console.log('test!');
  };

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        {this.state.stars.map((star, index) =>
          <Star
            star={star.id}
            class={star.class}
            index={index}
          />
        )}



      </ul>
    );
  }
}

export default StarRating;
