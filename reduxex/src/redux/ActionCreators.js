import {CREATE_CONTACT, REMOVE_CONTACT} from './ActionTypes';

export const createContact = (contact)  => {
    return {
        type: CREATE_CONTACT,
        contact: contact
    }
}

export const deleteContact = (email) => {
    return {
        type: REMOVE_CONTACT,
        email: email
    }
}

