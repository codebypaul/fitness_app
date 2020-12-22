import React from 'react';

import './LogInButton.css';
import { Link } from 'react-router-dom';




const styles = ['btn--primary', 'btn--outline']

const sizes = ['btn--medium', 'btn--large'];

export const LogInButton = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]

    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0]

    return (
        <Link to='/login' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} >
                {children}  
            </button>
        </Link>
    )
};

export default LogInButton;