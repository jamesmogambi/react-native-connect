import firebase from 'firebase';

// set user action object--if user is authenticated set user info to state
export const setUser = (payload) => ({
    type: 'SET_USER',
    payload
});

// signup action creator
export const signUp = (payload) => ({
    type: 'SIGN_UP',
    payload
});


// auth error action creator
export const authError = (payload) => ({
    type: 'AUTH_ERROR',
    payload
});


//  SIGN UP async redux action
//  implements sign up logic:- uses firebase sign up with email and password
export function startSignUp({ email, password }) {
    return function (dispatch) {
        dispatch({ type: "SET_LOADER" });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                //sign up successful
                dispatch(signUp("User sign up successful"))
            })
            .catch(function (error) {
                // An error happened.
                let { code, message } = error;
                console.log('error!!', code);
                console.log(message);
                // Alert.alert(errorMessage);
                dispatch(authError(message));
                // return errorMessage;
            });

    }

}


// login action creator
export const login = (payload) => ({
    type: 'LOGIN',
    payload
});

// LOGIN aysnc redux action
// implements login with email/password usin firebase auth
export function startLogin({ email, password }) {
    // console.log('startLogin', email, password)
    return function (dispatch) {
        dispatch({ type: "SET_LOADER" });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // login successful
                dispatch(login("Login successful"))
            })
            .catch(function (error) {
                // An error happened.
                let { code, message } = error;
                // console.log('error!!', code);
                // console.log(message);
                dispatch(authError(message));
                // return errorMessage;
            });
    }

}

//LOGOUT action object
export const logout = () => ({
    type: 'LOGOUT'
});


// startlogout async redux action
export function startLogout() {
    return function (dispatch) {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            dispatch(logout);
        }).catch((error) => {
            // An error happened.
            let { code, message } = error;
            dispatch(authError(message));

        });


    }

};