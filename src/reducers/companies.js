import { GET_COMPANIES, ADD_COMPANY, DELETE_COMPANY, EDIT_COMPANY } from '../actions';

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_COMPANIES:
            return action.companies;

        case ADD_COMPANY:
            console.log('state', state, 'action', action);
            return [...state, action.company];

        case DELETE_COMPANY:
            const index = state.findIndex(company => company.id === action.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case EDIT_COMPANY:
            state.forEach( function(company) {
                if (state.slug === action.company.slug) {
                    state.company = action.company;
                }
            });
            return [...state];
        default:
            return state;
    }
}