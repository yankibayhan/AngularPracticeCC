import { increment, decrement, reset } from './counter.actions';
import { initialState } from './counter.state';

import { createReducer, on } from '@ngrx/store';




const _counterReducer = createReducer(
    
    initialState, 
    on(increment, (state) => { // I'm calling the increment action
        return {
            ...state,
            counter: state.counter + 1,
        }; 
    }),       
    on(decrement, (state) => { // Calling the decrement action
        return{
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state) => { // Calling the reset action
        return {
            ...state,
            counter: 0,
        };
    })
);


export function counterReducer(state, action) { //It will grab the state and the action
        return _counterReducer(state, action);

} // Now i have to import the store in the app module