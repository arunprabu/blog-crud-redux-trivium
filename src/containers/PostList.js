import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PostList extends Component {

  render() {
    console.log(this.props);

    let posts = null; 
    if(this.props.posts && this.props.posts.length > 0){
      posts = this.props.posts.map( (post, index) => {
        return (
          <div className="list-group-item list-group-item-action" key={index}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
              <Link to='posts/1'>{post.title}</Link>
              </h5>
              <small>Post Id: {post.id}</small>
            </div>
            <p className="mb-1">
              {post.body}
            </p>
          </div>
       )
      })
    }

    return (
      <div className='container'>
        <h3>Post List</h3>
        <div className="list-group text-left">
          {
            this.props.posts && this.props.posts.length > 0? 
              posts:
              <div className='alert alert-warning'>
                Post Not Found! You can add one.
              </div>
          }
          
        </div>
      </div> 
    )
  }
}

const mapStateToProps = (state) => { // state will come from store
  console.log(state);
  return {
      posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList);