import { createStore } from "./lib/redux.mjs";

const multiply = ( state = 21, action) => {
    console.log(state, action);
    if (action.type === 'M') {
        return state * action.payload;
    }
    return state;
}

const store = createStore(multiply);

// subscribe to changes
store.subscribe(_ => console.log('state changed', store.getState()));

const initial = store.getState();
console.log('initial', initial);

// change the value
store.dispatch({
    type: 'M',
    payload: 2
})

console.log(store.getState());
