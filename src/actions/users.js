import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "60f1d0186249d167bcbe7d20";

// SET_USERS action
export const setUsers = (payload) => ({
    type: "SET_USERS",
    payload
}
);

// FETCH_ERROR action
export const fetchError = (payload) => ({
    type: "FETCH_ERROR",
    payload

});

// getUsers async redux action creator :- 
// fetches users data  from remote API using promise - then on successful request
// it dispatches setUser action object to the store to set users list
// otherwise on request error it dispatches  error action object with error message
export function getUsers() {
    return function (dispatch) {
        dispatch({ type: "SET_LOADER" });
        axios.get(`${BASE_URL}/user?limit=50`, { headers: { 'app-id': APP_ID } })
            .then(response => {
                // If request is good ...
                // - Dispatch setUsers action 
                let { data } = response.data;
                // console.log('getUsers', response.data);

                dispatch(setUsers(data));

            })
            .catch((error) => {
                console.log(error);

                // If request is bad...
                // -// Dispatch getUsersError action to store
                dispatch(fetchError("Error fetching users"))
            })
    }
}

// SET_USER_PROFILE action creator
const setProfile = (payload) => ({
    type: "SET_USER_PROFILE",
    payload
});


// getUserProfile async redux action
// -- queries full profile of a given user and dispatchs to the store SET_USER_PROFILE action
export function getUserProfile(id) {
    return function (dispatch) {
        dispatch({ type: "SET_LOADER" });
        axios.get(`${BASE_URL}/user/${id}`, { headers: { 'app-id': APP_ID } }).then(response => {
            // request successful
            dispatch(setProfile(response.data));
        }).catch(err => {
            // error fetching user profile
            dispatch(fetchError("Error fetching user profile"));

        })

    }
}

