

const Button = ({primary, disabled, label, onClick}) => {
    return (
        <>
            <button className={primary} disabled={disabled} onClick={onClick}>
                {label}
            </button>
        </>
    )
}


export default Button;