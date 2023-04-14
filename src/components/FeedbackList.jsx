import React, { Component } from 'react';
import FeedbackItem from './FeedbackItem';

class FeedbackList extends Component {


  state = {
    feedbacks: [
      {
        id: 1,
        user: 'happyBlogger',
        rating: 5,
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eveniet quam minima perferendis architecto facere est quidem commodi ea. Nisi, voluptatibus alias repellat cupiditate cumque natus distinctio debitis doloribus similique.'
      },
      {
        id: 2,
        user: 'draganXXX',
        rating: 3,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio natus voluptate repudiandae. Veniam, dicta libero.'
      },
      {
        id: 3,
        user: 'marylinMaginson',
        rating: 4,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, distinctio.'
      }
    ]
  };


  handleDelete = (feedbackId) => {
    const feedbacks = this.state.feedbacks.filter(f => f.id !== feedbackId);
    this.setState({ feedbacks: feedbacks });
  };

  // handleIncrement = (feedback) => {
  //   const feedbacks = [...this.state.feedbacks];
  //   const index = feedbacks.indexOf(feedback);
  //   feedbacks[index] = { ...feedback };
  //   feedbacks[index].rating++;
  //   this.setState({ feedbacks: feedbacks });
  // };

  render() {
    const { length: count } = this.state.feedbacks

    //stats
    //calculate ratings
    let average = this.state.feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / count;

    //displaying averageRating with one dezimal only
    average = average.toFixed(1).replace(/[.,]0$/, '')


    if (count === 0)
      return <p>There are no reviews</p>;

    return (
      <>
        <div className="d-flex justify-content-between mb-2">
          <h5>{count} Reviews</h5>
          <h5>Average Rating: {isNaN(average) ? 0 : average}</h5>
        </div>
        {this.state.feedbacks.map(feedback =>
          <FeedbackItem
            key={feedback.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            user={feedback.user}
            text={feedback.text}
            rating={feedback.rating}
            id={feedback.id}
            />
          )}
      </>
    );
  }
}

export default FeedbackList
