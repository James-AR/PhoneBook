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
            type: 'personal'
        }]
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState)
    
    return (
        <ContactContext.Provider 
        value={{ contacts: state.contacts }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState