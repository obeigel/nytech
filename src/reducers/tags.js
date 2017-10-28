import { GET_TAGS } from '../actions';

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_TAGS:
            return action.tags;

        default:
            return state;
    }
}