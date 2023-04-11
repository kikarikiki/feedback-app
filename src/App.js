import React, { Component } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

class App extends Component {
  render() {
    return (
    <>
      <Header text=''/>
      <div className='container'>
        <FeedbackList />
      </div>
    </>
    )
  }
}

export default App
