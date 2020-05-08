/*jshint esversion: 6 */


import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    stars: [
      {
        id: 1,
        starState: false
      },{
        id: 2,
        starState: false
      },
      {
        id: 3,
        starState: false
      },
      {
        id: 4,
        starState: false
      },
      {
        id: 5,
        starState: false
      },
    ]
  };

  // Write a function that returns 5 Star components

  // starRenderer = () => {
  //   console.log('test!');
  // };

  // Write an event handler that updates the rating state.
  handleStarClick = (index) => {
    let star = this.state.stars[index].id;
    console.log("Hey, you just clicked star " + star + ".");
    for (let i=index ; i >=0 ; i--) {
      console.log("Currently on position " + i + " in state.stars.");
      console.log(this.state);
      this.setState( prevState => {
        starState: prevState.stars[index].starState = !prevState.stars[index].starState
      })
    }
  };

  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        {this.state.stars.map((star, index) =>
          <Star
            star={star.id}
            class={star.starState}
            index={index}
            starClick={this.handleStarClick}
          />
        )}
      </ul>
    );
  }
}

export default StarRating;
