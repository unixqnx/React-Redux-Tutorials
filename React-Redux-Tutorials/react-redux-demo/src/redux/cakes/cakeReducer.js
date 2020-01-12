import { BUY_CAKE } from "./cakeTypes";
import store from "../store";

const initialState = {
    numOfCakes: 10
};


const cakeReducer = (state = initialState, action) => {
    switch(action.type){
      case BUY_CAKE:
      return {
        ...store,
        numOfCakes: state.numOfCakes - action.payload
      };
      default : return state;
    };
};

export default cakeReducer;