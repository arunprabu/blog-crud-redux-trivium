import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, getPostById, updatePost } from '../services/postService';

class PostDetails extends Component {

  componentDidMount(){
    // read URL Params
    this.props.dispatch(getPostById(this.props.match.params.id));
  }

  handleUpdate = (event) => {
    event.preventDefault();
    console.log(this.getTitle.value);
    console.log(this.getBody.value);

    let formDataToUpdate = {
      id: this.props.post.id,
      userId: this.props.post.userId,
      title: this.getTitle.value,
      body: this.getBody.value
    }

    console.log(formDataToUpdate);

    this.props.dispatch(updatePost(formDataToUpdate));
  }


  handleDelete = () => {
    console.log('Into Delete Handler');
    this.props.dispatch( deletePost(this.props.post.id));
  }

  render() {
    
    console.log(this.props.post);
    let postInfo = this.props.post;

    return (
      <div className='container'>
        <h1>Post Details</h1>
        
        {
          Object.keys(this.props.post).length > 0?
            <div className='text-left'>
              <div className="list-group">
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{postInfo.title}</h5>
                    <small>Post Id: {postInfo.id}</small>
                  </div>
                  <p className="mb-1">
                    {postInfo.body}
                  </p>
                  <small>UserId: {postInfo.userId}</small>
                  <br />
                  <button className='btn btn-primary' data-toggle='modal'
                    data-target='#editModal'>Edit</button> &nbsp;
                  <button className='btn btn-danger' onClick={this.handleDelete}>Delete</button>
                </div>
              </div>
              <div className="modal fade" id="editModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Update Post
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={this.handleUpdate}>
                        <input required type="text"
                          placeholder="Enter Post Title"
                          className='form-control'
                          defaultValue={this.props.post.title} 
                          ref={(input) => this.getTitle = input} 
                        /><br />
                        <textarea required rows="5" cols="28"
                          placeholder="Enter Post"
                          className='form-control' 
                          defaultValue={this.props.post.body} 
                          ref={(input) => this.getBody = input} 
                        /><br />
                        <button className='btn btn-primary' type='submit'>Save Changes</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          :
            <div className='alert alert-success'>
              Deleted Successfully!
              You can go to <Link to='/posts'>Posts</Link> page!!
            </div>
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => { // state will come from store
  // it is from state.posts 
  // not from individual post because of the way it is mentioned in combined reducer
  return {
    post: state.posts.post
  }
}

export default connect(mapStateToProps)(PostDetails);