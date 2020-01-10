// console.log('From index.js');
const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//(previousStation, action) => newStation

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: {
            ...state,
            numofCakes: state.numOfCakes-1
        }

        default: state
    }
}

