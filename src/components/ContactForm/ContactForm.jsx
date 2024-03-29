import PropTypes from 'prop-types';
import { Component } from "react";
import {Label,Input} from './ContactForm.styled'

export class ContactForm extends Component{
    state = {
     name: '',
    number:'',
    }


    handleInputChange = e => {
 
        this.setState({
            [e.currentTarget.name]:e.currentTarget.value,
        })
    }
  
    handleFormSubmit = (e) => {
     e.preventDefault();
        this.props.handleFormChange(this.state)
        this.setState({
            name: '',
            number:'',
        })
        }
    


    render() {
  return (
           <>
                <form onSubmit={this.handleFormSubmit}>
                    <Label> Name
<Input
  type="text"
  name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
  required
  value={this.state.name}
   onChange={this.handleInputChange}                                               
/>
              </Label>
              <Label> Number
<Input
  type="tel"
  name="number"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                      value={this.state.number}
                      onChange={this.handleInputChange}    
/>
              </Label>
              

                    <button type="submit">Add contact</button>

            </form>
        </>
        )  
    }
}

ContactForm.propTypes = {
  handleFormChange:PropTypes.func.isRequired,
}