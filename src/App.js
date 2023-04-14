import React, { Component } from 'react';
import Header from './components/Header';
import AddCommentForm from './components/AddCommentForm';
import FeedbackList from './components/FeedbackList'

class App extends Component {

  render() {
    return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList />
        <AddCommentForm />
      </div>
    </>
    )
  }
}

export default App
