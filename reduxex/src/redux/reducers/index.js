import {combineReducers} from 'redux'

import contactReducer from './ContactReducer';
import productReducer from './ProductReducer';

export default combineReducers({
    contacts: contactReducer,
    products: productReducer
});