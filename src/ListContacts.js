import React, { Component } from 'react';

class ListContacts extends Component {
  render() {
    console.log('Props', this.props.contacts);
    return (
      <ol className='contact-list'>

      </ol>
    )
  }
}

export default ListContacts