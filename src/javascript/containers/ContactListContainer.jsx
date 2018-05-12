import { connect } from 'react-redux'

import ContactsList from '../components/ContactList'

const mapStateToProps = (state) => {
    return state.contactReducer
}

const ContactListContainer = connect(
    mapStateToProps
)(ContactsList)

export default ContactListContainer