import { StyledButton } from './Button.styled'
import PropTypes from 'prop-types';

export const Button = ({title}) => {
    return (
        <StyledButton >{title}</StyledButton>
    )
    
}

Button.propTypes = {
    title:PropTypes.string.isRequired,
}