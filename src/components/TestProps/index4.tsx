import React, { ButtonHTMLAttributes } from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    css ?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> =(props)=>{
    const {title = 'Click me',...rest}  = props;
    return(
        <button style={props.css}  title={title} {...rest} >Click Me</button>
    )
}

export default Button;