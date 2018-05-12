import React from 'react';
import CircularProgress from 'material-ui/CircularProgress'

import {fetchContacts} from '../actions/contactActions'
import ContactListItem from './ContactListItem'

export default class ContactList extends React.Component {
    constructor(props) {
        super(props)
        this.downLoadMore = this.downLoadMore.bind(this)
    }

    downLoadMore(){

    }
    componentWillMount() {
        const { dispatch } = this.props
        dispatch(fetchContacts(50))
    }
    render() {
        const { history } = this.props
        const { contacts, isFetching } = this.props
        isFetching
        return (
            <section>
                {
                    isFetching?(<CircularProgress />):
                        contacts.map(contact=>{
                            return (
                            <div key={contact.login.username}>
                                <ContactListItem contact={contact} />
                            </div>
                            )
                        })


                }
            </section>
        )
    }

}