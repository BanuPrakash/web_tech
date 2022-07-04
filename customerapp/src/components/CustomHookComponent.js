import useApiCall from "../useApiCall";

export default function CustomHookComponent () {
     let {data, done} = useApiCall("https://jsonplaceholder.typicode.com/users");
    if(!done) return <h1>Loading....</h1>
    else {
        return <>
                {
                    data.map(user => <h1 key={user.id}>{user.name}, {user.email}</h1>)
                }
        </>
    }

}