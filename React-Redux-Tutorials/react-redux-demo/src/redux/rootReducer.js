import { combineReducers } from 'redux';
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReduser";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

export default rootReducer;