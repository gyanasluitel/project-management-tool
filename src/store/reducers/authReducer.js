const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log("login failed");
            return {
                ...state, 
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGN_OUT_SUCCESS':
            console.log('sign out success');
            return {
                ...state
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return {
                ...state
            }
    }
}

export default authReducer;