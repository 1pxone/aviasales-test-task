import axios from 'axios';
import * as endpoints from '../_constants/endpoints';
import * as action from '../_constants/actionTypes';

//TICKETS ACTIONS
export function ticketsIsLoading(bool) {
    return {
        type: action.TICKETS_IS_LOADING,
        isLoading: bool
    }
}
export function ticketsGetSuccess(tickets) {
    return {
        type: action.TICKETS_GET_SUCCESS,
        allTickets: tickets,
        tickets
    }
}
export function ticketsHasErrored(bool) {
    return {
        type: action.TICKETS_HAS_ERRORED,
        hasErrored: bool
    }
}
export function ticketsErrors(errors) {
    return {
        type: action.TICKETS_ERRORS,
        ticketsErrors: errors
    }
}
export function ticketsFilters(filters) {
    return {
        type: action.TICKETS_FILTERS,
        filters
    }
}

//GET TICKETS DATA
export function fetchTicketsData(){
    return (dispatch) => {
        dispatch(ticketsHasErrored(false))
        dispatch(ticketsErrors([]))
        dispatch(ticketsIsLoading(true))
        axios.get(endpoints.tickets)
        .then((response) => {
            dispatch(ticketsGetSuccess(response.data.tickets))
            dispatch(ticketsIsLoading(false))
        })
        .catch((err) => {
            console.log(err)
            dispatch(ticketsIsLoading(false))
            dispatch(ticketsHasErrored(true))
            dispatch(ticketsErrors(err))
        });
    }
}
