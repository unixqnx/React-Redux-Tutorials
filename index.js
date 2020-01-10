const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM
    }
}



//(previousStation, action) => newStation

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }


const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: 
//             let r ={};
//             Object.assign(r, state);
//             //...state,
//             r.numOfCakes = r.numOfCakes - 1;
//         return r;
//         case BUY_ICECREAM: 
//             let r2 ={};
//             Object.assign(r2, state);
//             //...state,
//             r2.numOfIceCreams = r2.numOfIceCreams - 1;
//         return r2;
//         default: return state
//     }
// }


const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: 
            let r ={};
            Object.assign(r, state);
            //...state,
            r.numOfCakes = r.numOfCakes - 1;
        return r;
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: 
            let r2 ={};
            Object.assign(r2, state);
            //...state,
            r2.numOfIceCreams = r2.numOfIceCreams - 1;
        return r2;
        default: return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer
});
const store = createStore(rootReducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();








