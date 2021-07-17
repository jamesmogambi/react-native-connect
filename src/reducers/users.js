


// users reducer:- 
// this reducer stores users data that is queried from remote API.
const initialState = {
    users: null, error: ""
};
export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
                error: ""
            };
        case "GET_USERS_ERROR":
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }

}