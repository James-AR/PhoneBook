import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
            id: 1,
            name: 'Joe Huggins',
            email: 'joe@email.com',
            phone: '111-111-1111',
            type: 'personal'
        }, {
            id: 2,
            name: 'Sara Watt',
            email: 'sara@email.com',
            phone: '222-222-2222',
            type: 'professional'
        }],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState)

    const addContact = contact => {
        contact.id = uuid.v4()
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }

    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }

    const clearFilter = text => {
        dispatch({ type: CLEAR_FILTER })
    }
    
    return (
        <ContactContext.Provider 
        value={{ 
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState