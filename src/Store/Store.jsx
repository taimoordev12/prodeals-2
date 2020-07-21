import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
  } from 'redux';
  import thunk from 'redux-thunk';
  import Login from './Reducers/AuthReducer'

  export const Store = (initialState = {todos: [{id:123, text:'hello', completed: false}] }) => {
      let reducer = combineReducers({
        Login: Login
      });
  
      let store = createStore(
          reducer,
          initialState,
          compose(
              applyMiddleware(
                  thunk
              ),
              window.devToolsExtension ? window.devToolsExtension() : f => f
          )
      );
  
      return store;
  };