import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PostList extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Post List</h3>
        <div className="list-group text-left">
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
              <Link to='posts/1'>post title</Link>
              </h5>
              <small>Post Id: 1</small>
            </div>
            <p className="mb-1">
              lorem ipsum....
            </p>
          </div>
        </div>
       
        <div className='alert alert-warning'>
          Post Not Found! You can add one.
        </div>
       
      </div> 
    )
  }
}

export default PostList;