import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import ContactListContainer from '../containers/ContactListContainer'
import MenuDrawer from "./MenuDrawer";

export default class Home extends React.Component  {
    render() {
        return (
            <div><AppBar title="Contact List App" />
                <ContactListContainer /></div>
        )}}

connect()(Home)