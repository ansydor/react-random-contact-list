import React from 'react'
import { withRouter } from 'react-router-dom'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'


const ContactListItem =  (props)  => {
    console.log(props)
    const { contact, history} = props
    let contactName = contact.name.first + " " + contact.name.last
    let avatarImage = contact.picture.large
    return (
        <div>
            <ListItem
                primaryText={contactName}
                // onClick={history.push('/contacts/')}
                leftAvatar={<Avatar src={avatarImage}/>}/>
        </div>
    );
};
export default withRouter(ContactListItem)