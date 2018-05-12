import {
    FETCH_CONTACTS,
    FETCH_CONTACTS_SUCCESS,
} from '../actions/actionTypes'

const contactReducerInitialState = {
    isFetching: false,
    contacts: []
}

export const contactReducer = (state = contactReducerInitialState, action) =>{
    switch (action.type) {
        case FETCH_CONTACTS:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case FETCH_CONTACTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                contacts: action.contacts,
            })
        default:
            return state
    }
}
