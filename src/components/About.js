import React from 'react'
import { connect } from 'react-redux';
import { getContacts } from '../services/contactService';

const About = (props) => {
  const handleLoadContacts = () => {
    props.dispatch(getContacts());
  }

  return (
    <div>
      <h1>About Us!</h1>

      <button type='button' className='brn btn-primary' onClick={handleLoadContacts}>Load Contacts</button>
    </div>
  )
}

export default connect()(About);
