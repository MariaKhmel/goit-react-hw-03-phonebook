import PropTypes from 'prop-types';
import { Contactcard } from './ContactItem.styled'


const ContactItem = ({contact, contactlist, onClick}) => {
    return (
       
        <Contactcard >
<p> {contact.name} : {contact.number}</p>
            {contactlist.length ?
                <button type="button" onClick={()=>onClick(contact.id)}> Delete</button>:
            
                (null)} 
   </Contactcard>     
    )

}

export { ContactItem };

ContactItem.propTypes = {
    contact:PropTypes.object.isRequired,
    contactlist:PropTypes.array.isRequired,
    onClick:PropTypes.func.isRequired,
}