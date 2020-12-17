import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from '../components/PostItem';
import { getPosts } from '../services/postService';

class PostList extends Component {

  componentDidMount(){
    // Step 19: dispatching to getPosts from service
    this.props.dispatch(getPosts());
  }

  render() {
    console.log(this.props);

    let posts = null; 
    if(this.props.posts && this.props.posts.length > 0){
      posts = this.props.posts.map( (post, index) => {
        return (
          <PostItem 
            id={post.id} 
            title={post.title}
            body={post.body} 
            key={index}/>
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
      posts: state.posts.postList
  }
}

export default connect(mapStateToProps)(PostList);