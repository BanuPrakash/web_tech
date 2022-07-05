import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import ContactView from "./ContactView";
import {createContact, deleteContact} from './redux/ActionCreators';

export default function App() {
    let nameRef = React.createRef(null);
    let emailRef = React.createRef(null);

    // mapStateToProps
    let contacts = useSelector(state => state.contacts);

    // instead of mapDispatchToProps
    let dispatch = useDispatch();
    
    function handleSubmit() {
        let contact = {
          name : nameRef.current.value,
          email : emailRef.current.value,
        }
        dispatch(createContact(contact));
      }
    
      function deleteEvent(email) {
        dispatch(deleteContact(email));
      }

    return <div>
      Name <input type="text" ref={nameRef} /> <br />
      Email <input type="text" ref={emailRef} /> <br />
      <button type="button" onClick={handleSubmit}>Add Contact</button>
      {
        contacts.map(contact => <ContactView 
          delEvent={() => deleteEvent(contact.email)}
          contact={contact} 
          key={contact.email} />)
      }
  </div>
}