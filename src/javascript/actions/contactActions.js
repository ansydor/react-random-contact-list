import fetch from 'isomorphic-fetch'

import {
    FETCH_CONTACTS,
    FETCH_CONTACTS_SUCCESS,
} from '../actions/actionTypes'

function receiveContacts(contacts) {
    console.log(contacts)
    return {
        type: FETCH_CONTACTS_SUCCESS,
        contacts: contacts,
        receivedAt: Date.now()
    }
}

function requestContacts(count) {
    return dispatch =>
    {
        dispatch({
            type: FETCH_CONTACTS
        })
        let url = 'https://randomuser.me/api/?results='+count
        fetch(url)
            .then(response => response.json())
            .then(json=>dispatch(receiveContacts(json.results)))
    }
}

export function fetchContacts(count) {
    return (dispatch, getState) => {
        return dispatch(requestContacts(count))
    }
}