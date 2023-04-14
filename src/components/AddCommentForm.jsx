import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faStarHalfAlt)

class AddCommentForm extends Component {

  handleCommentSubmit = (e) => {
      e.preventDefault();
      alert('funzt')
  }

  render() {
    return (
      <form action="" onSubmit={this.handleCommentSubmit}>
        <div className="card mt-5">
            <div className="card-header text-center p-3">
              <h4 className="mb-0">Add Review</h4>
            </div>
          <div className="card-body text-center">
            <h6 className="mb-0">Your feedback helps us and others</h6>
            <small className="px-3">Please let us know of what you think</small>
            <div className="d-flex flex-row justify-content-center mt-3">
              <FontAwesomeIcon icon={farFaStar} className='text-warning me-2'/>
              <FontAwesomeIcon icon={farFaStar} className='text-warning me-2'/>
              <FontAwesomeIcon icon={farFaStar} className='text-warning me-2'/>
              <FontAwesomeIcon icon={farFaStar} className='text-warning me-2'/>
              <FontAwesomeIcon icon={farFaStar} className='text-warning me-2'/>
            </div>
            <div className="form-group mt-4">
              <textarea className="form-control" rows="2" placeholder="Comment"></textarea>
            </div>
            <div className="mt-2">
              <button type="submit" className="btn btn-primary btn-block">Publish</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default AddCommentForm
