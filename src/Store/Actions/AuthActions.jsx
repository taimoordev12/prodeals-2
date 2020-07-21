import * as actionTypes from './ActionTypes';
import axios from '../../axios';


export const ErrRefresh = () => {
    localStorage.setItem('token',"")
    localStorage.setItem("user","")
    return {
        type: actionTypes.LOGIN_ERR_REFRESH,
        
    };
};

export const loginSuccess = (login) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        login: login
    };
};

export const loginFailed = (error) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error: error
    };
};

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
    };
};


export const Login = (data) => {
    return dispatch => {

        dispatch(loginStart());
        axios.post('/login',data)
            .then(res => {
                dispatch(loginSuccess(res));
                localStorage.setItem('token',res.data.user._id)
                localStorage.setItem('user',JSON.stringify(res.data.user))
            })
            .catch(err => {
                console.log(err.message)
                dispatch(loginFailed(err));
            });

    }
    
}


