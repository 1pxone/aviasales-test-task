import * as actionType from '../_constants/actionTypes';

var initialState = {
    isLoading: false,
    tickets: [],
    ticketsErrors: [],
    hasErrored: false,
    filters: ["all","0","1","2","3"]
}

export function tickets(state = initialState, action){
    switch (action.type) {
        case actionType.TICKETS_IS_LOADING:
            let isLoading = action.isLoading;
            return {
                ...state,
                isLoading
            }
        case actionType.TICKETS_GET_SUCCESS:
            let tickets  = action.tickets;
            return {
                ...state,
                tickets
            }
        case actionType.TICKETS_HAS_ERRORED:
            let hasErrored = action.hasErrored;
            return {
                ...state,
                hasErrored
            }
        case actionType.TICKETS_ERRORS:
            let ticketsErrors = action.ticketsErrors;
            return {
                ...state,
                ticketsErrors
            }
        case actionType.TICKETS_FILTERS:
            let filters = action.filters;
            return {
                ...state,
                filters
            }
        default:
            return state
    }
}
