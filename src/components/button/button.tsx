import React from "react";

interface Props {
    disabled: string
    onClick: () => void
    label: string
}

const Button: React.FC<Props> = ({
    label, disabled, onClick
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled == "true" ? true : false}
        >{label}</button>
    )
}


export default Button;