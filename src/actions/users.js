import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "60f1d0186249d167bcbe7d20";

// SET_USERS action
export const setUsers = (payload) => ({
    type: "SET_USERS",
    payload
}
);

// GET_USERS_ERROR action
export default getUsersError = (payload) => ({
    type: "GET_USERS_ERROR",
    payload

});

// getUsers async redux action creator :- 
// fetches users data  from remote API using promise - then on successful request
// it dispatches setUser action object to the store to set users list
// otherwise on request error it dispatches  error action object with error message
export function getUsers() {
    return function (dispatch) {
        axios.get(`${BASE_URL}/user?limit=50`, { headers: { 'app-id': APP_ID } })
            .then(response => {
                console.log(response);
                // If request is good ...
                // - Dispatch setUsers action 
                dispatch(setUsers(response.data));

            })
            .catch((error) => {
                console.log(error);

                // If request is bad...
                // -// Dispatch getUsersError action to store
                dispatch(getUsersError("Error fetching users"))
            })

        // const configObject = {
        //     method: "GET",
        //     headers:
        //     {
        //         "Content-Type": "application / json",
        //         "Accept": "application / json",
        //         "app-id": "60f1d0186249d167bcbe7d20"
        //     }
        // };
        // fetch("https://dummyapi.io/data/api/user?limit=100", configObject).then(response => {
        //     console.log('fetch response', response);
        //     // If request is good ...
        //     // - Dispatch setUsers action 
        //     dispatch(setUsers(response.data));

        // })
        //     .catch((error) => {
        //         console.log(error);

        //         // If request is bad...
        //         // -// Dispatch getUsersError action to store
        //         dispatch(getUsersError("Error fetching users"))
        //     })
    }
}