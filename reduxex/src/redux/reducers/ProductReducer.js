

export default (state = [], action) => {
    switch(action.type) {
        case "CREATE_PRODUCT":
            return [
                ...state,
                {"id":1, "name": "iPhone"}
            ];
        
        default: 
            return state;
    }
}
