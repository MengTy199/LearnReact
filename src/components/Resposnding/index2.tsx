interface ButtonProps{
    onClick: () =>void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> =(props) =>{
    const {onClick, children, } = props;


    return(
        <>
            <button onClick={onClick}>
                {children}
            </button>
        </>
    )

}

export default Button;