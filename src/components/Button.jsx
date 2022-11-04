import React from 'react'
import './Button.css'

const Button = ({children, onClick}) => {
    return (  
        <button onClick={onClick} className='button-save-task'>
            {children}
        </button>
    );
}

<Button>Adicionar</Button>
 
export default Button;