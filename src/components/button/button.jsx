
const Button = (props) => {
    let { primary, disabled, label, onClick } = props;
    return (
        <>
            <button
                className={primary}
                disabled={disabled}
                onClick={onClick}
            >
                {label}
            </button>
        </>
    )
}


export default Button;