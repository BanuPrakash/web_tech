import React, {Component} from 'react';
import { connect } from "react-redux";
import {createContact, deleteContact} from './redux/ActionCreators';
import ContactView from './ContactView';

class App extends Component {
  nameRef = React.createRef(null);
  emailRef = React.createRef(null);

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    let contact = {
      name : this.nameRef.current.value,
      email : this.emailRef.current.value,
    }
    this.props.newContact(contact);
  }

  deleteEvent(email) {
    this.props.removeContact(email)
  }

  render() {
    return <div>
        Name <input type="text" ref={this.nameRef} /> <br />
        Email <input type="text" ref={this.emailRef} /> <br />
        <button type="button" onClick={this.handleSubmit}>Add Contact</button>
        {
          this.props.data.map(contact => <ContactView 
            delEvent={() => this.deleteEvent(contact.email)}
            contact={contact} 
            key={contact.email} />)
        }
    </div>
  }
}

// state is from redux store
// returned "contacts" can be used as this.props.data in App
function mapStateToProps(state) {
  return {
    data: state.contacts
  }
}
// in React this.props.newContact(contact) ==> dispatch(action) to Redux store
// in React this.props.removeContact(email) ==> dispatch({
 //       type: REMOVE_CONTACT,
  //      email: email
  //  }) to Redux store

function mapDispatchToProps(dispatch) {
  return {
    newContact: (contact) => dispatch(createContact(contact)),
    removeContact: (email) => dispatch(deleteContact(email))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);