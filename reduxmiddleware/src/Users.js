import {useState, useEffect} from 'react';

import { useSelector, useDispatch } from "react-redux"
import {fetchUsers} from './redux/thunk/thunkApi';

export default function Users() {
    const customers = useSelector(state => state.customers);
    let {loading, users, error} = customers;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    },[]);
    
    return <>
        {
            loading ? <h1>loading....</h1> : users.map(c => <h1 key={c.id}>{c.email}, {c.name}</h1>)
        }
    </>
}