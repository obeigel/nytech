import { REQUEST_COMPANIES, GET_COMPANIES } from '../actions';

function reducer(state = false, action) {
    switch (action.type) {
        case REQUEST_COMPANIES:
            return true;

        case GET_COMPANIES:
            return false;

        default:
            return state;
    }
}

export default reducer;