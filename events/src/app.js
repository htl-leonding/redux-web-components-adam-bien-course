import { createStore } from "./lib/redux.mjs";

const multiply = ( state = 21, action) => {
    console.log(state, action);
    if (action.type === 'M') {
        return state * action.payload;
    }
    return state;
}

const store = createStore(multiply, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// subscribe to changes
store.subscribe(_ => console.log('state changed', store.getState()));

const initial = store.getState();
console.log('initial', initial);

// change the value
store.dispatch({
    type: 'M',
    payload: 2
})
store.dispatch({
    type: 'M',
    payload: 3
})


console.log(store.getState());
