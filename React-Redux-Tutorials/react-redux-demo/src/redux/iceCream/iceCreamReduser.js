import { BUY_ICECREAM } from "./iceCreamTypes";
import store from "../store"

const initialState = {
    numOfIceCreams: 20
};

export const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...store,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        default : return state;
    };
};

export default iceCreamReducer;