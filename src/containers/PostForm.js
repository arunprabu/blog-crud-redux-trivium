import React, { Component } from 'react';
// Step 10: get the dispatch method in this comp by using connect from react-redux
import { connect } from 'react-redux';

// Step 13: Work on dispatching action with formData to the service layer
import { createPost } from '../services/postService';

class PostForm extends Component {

  // Step 9.2 then, work on handleSubmit method 
  handleAddPost = (event) => {
    event.preventDefault();
    console.log(this.getTitle.value);
    console.log(this.getContent.value);

    let formData = {
      title: this.getTitle.value,
      body: this.getContent.value
    }
    console.log(formData);

    // Step 11: get the dispatch method in props
    console.log(this.props);
    
    this.props.dispatch(createPost( formData )); // this is the service method
  }

  // Step 9.1
  // form code can be  the following with ref's and submission logic 
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h3>Create Post!</h3>
            <form className='text-left' onSubmit={this.handleAddPost}>
              <input required type="text"
                placeholder="Enter Post Title"
                className='form-control' ref={(input) => this.getTitle = input} /><br />
              <textarea required rows="5" cols="28"
                placeholder="Enter Post"
                className='form-control' ref={(input) => this.getContent = input} /><br />
              <button className='btn btn-primary' type='submit'>Add Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// Step 10.1
//last line of the component should be the following. 
// after connecting props will be available in this component. 
export default connect()(PostForm);