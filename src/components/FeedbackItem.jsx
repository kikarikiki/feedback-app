import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faStarHalfAlt)


class FeedbackItem extends Component {
  state = {
    likesCount:0,
    lovesCount:0,
  }

  handleLikeIncrease = () => {
    this.setState({ likesCount: this.state.likesCount + 1 })
  };

  handleLoveIncrease = () => {
    this.setState({ lovesCount: this.state.lovesCount + 1 })
  };



  render() {
    return (
      <div className='card mb-4'>
        <div className='card-header border-0 bg-transparent py-3 d-flex justify-content-between align-item-center'>
          <span>{this.formatCount()}</span>
          <button className='btn btn-close align-self-center' onClick={() => this.props.onDelete(this.props.id)}></button>
        </div>
        <div className='card-body'>
          <p>{this.props.text}</p>
          {/*<button onClick={() => this.props.onIncrement(this.props.rating)} className='btn btn-primary me-2'>Increment</button>*/}
        </div>
        <div className="card-footer border-0 bg-transparent pt-0 pb-3 d-flex">
          <button className="btn ps-0" onClick={this.handleLikeIncrease}><FontAwesomeIcon icon={faThumbsUp} className={this.state.likesCount === 0 ? 'text-muted' : 'text-primary'}/></button>
          <span className='i-counts'>{this.state.likesCount === 0 ? '' : this.state.likesCount}</span>
          <button className="btn" onClick={this.handleLoveIncrease}><FontAwesomeIcon icon={faHeart} className={this.state.lovesCount === 0 ? 'text-muted' : 'text-danger'}/></button>
          <span className='i-counts'>{this.state.lovesCount === 0 ? '' : this.state.lovesCount}</span>
        </div>
      </div>
    );
  }

  formatCount() {
    return this.props.rating === 0 ? <><FontAwesomeIcon icon={farFaStar} className='text-warning me-2'/><span>{this.props.rating}</span></> : <><FontAwesomeIcon icon={fasFaStar}  className='text-warning me-2'/><span>{this.props.rating}</span></>;
  }

}

export default FeedbackItem
