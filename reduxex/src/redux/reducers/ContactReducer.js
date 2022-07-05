import {CREATE_CONTACT, REMOVE_CONTACT} from '../ActionTypes';

// Redux when reducer is bound to store triggers action.type = @@INIT

export default (state = [], action) => {
    switch(action.type) {
        case CREATE_CONTACT:
            return [
                ...state,
                {...action.contact}
            ];
        case REMOVE_CONTACT:
            return state.filter(contact => contact.email !== action.email);
        default: 
            return state;
    }
}
