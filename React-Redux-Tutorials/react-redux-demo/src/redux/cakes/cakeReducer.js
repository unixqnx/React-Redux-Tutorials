import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    numOfCakes: 10
};


const cakeReducer = (state = initialState, action) => {
    switch(action.type){
      case BUY_CAKE:
        let r = {};
        Object.assign(r, state);
        r.numOfCakes = r.numOfCakes - 1;
        return r;
      default : return state;
    };
};

export default cakeReducer;