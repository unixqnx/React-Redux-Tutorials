const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios');

const initialStates = {
    loading: false,
    users: [],
    error: ''
};



const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
};

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
};

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error        
    };
};

const reducer = (state = initialStates, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST :
            let r ={};
            Object.assign(r, state);
            //...state, 
            r.loading = true;          
            return r
        case FETCH_USERS_SUCCESS :
            let r1 ={};
            Object.assign(r1, state);
            //...state,
            r1.loading = false;
            r1.users = action.payload;
            r1.error = '';
            return r1;
        case FETCH_USERS_FAILURE :
            let r2 ={};
            Object.assign(r2, state);   
            //...state,
            r2.loading = false;
            r2.users = [];
            r2.error = action.payload;
            return r2;
        default: return state;
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //response.data is array of users
            const users = response.data.map(user => user.id);
            dispatch(fetchUsersSuccess(users));
        })
        .catch(error => {
            //error.message
            dispatch(fetchUsersFailure(error.message));
        });
    };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchUsers());

