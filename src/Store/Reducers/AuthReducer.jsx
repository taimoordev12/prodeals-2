import * as actionTypes from '../Actions/ActionTypes';


const initialState = {
    login:null,
    loading:true,
    error:null
}

const Login = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                login: action.login,
                loading: false,
                error: null
            };
            case actionTypes.LOGIN_ERR_REFRESH:
            return {
                ...state,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};

export default Login;