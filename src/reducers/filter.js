import { SET_FILTER } from '../actions';

export default function reducer(state = 'ALL', action) {
    switch (action.type) {
        case SET_FILTER:
            console.log('Set Filter', action.filter, action);
            return action.filter;
        default:
            return state;
    }
}