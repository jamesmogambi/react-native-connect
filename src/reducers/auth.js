
// auth reducer --- stores authentication sought of things related to the user
const initialState = { user: null, message: '', error: null, loading: false };

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'SIGN_UP':
            return {
                ...state,
                message: action.payload,
                loading: false,
                error: null
            };
        case 'LOGIN':
            return {
                ...state,
                message: action.payload,
                loading: false,
                error: null

            };
        case 'SET_LOADER':
            return {
                ...state,
                loading: true,
                error: null

            };
        case 'AUTH_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            };


        default:
            return state;
    }

}