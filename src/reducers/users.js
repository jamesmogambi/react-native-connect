// users reducer:- 
// this reducer stores users data that is queried from remote API.
const initialState = {
    users: null, userProfile: null, error: "", loading: false
};
export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
                error: "",
                loading: false
            };
        case "SET_LOADER":
            return {
                ...state,
                loading: true,
                userProfile: null
            };
        case "SET_USER_PROFILE":
            return {
                ...state,
                userProfile: action.payload,
                loading: false
            };
        case "FETCH_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }

}