import axios from 'axios';

import {fetchUsersRequest, fetchUserSuccess, fetchUserFailure} from '../ActionCreators';

export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            dispatch(fetchUserSuccess(response.data))
        }).catch( error => {
            dispatch(fetchUserFailure(error.message))
        })
    }
}   