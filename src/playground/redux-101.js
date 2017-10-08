import { createStore } from 'redux';

//ACTION GENERATORS
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof incrementBy === "number" ? incrementBy : 1
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: typeof decrementBy === "number" ? decrementBy : 1
});

const Reset = () => ({
    type:'RESET'
})

const setCount = ({count}) => ({
    type:'SET',
    count
})


const store = createStore((state = {count:0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count : state.count + incrementBy
            };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count : state.count - decrementBy
            }; 
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count : 0
            };     
        default:
            return state;
    }
});
//SEE CHANGES OVER TIME
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//ACTIONS
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch(incrementCount());

//RESET 
store.dispatch(Reset());

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch(decrementCount({decrementBy: 5}));

store.dispatch(setCount({count:104}));

