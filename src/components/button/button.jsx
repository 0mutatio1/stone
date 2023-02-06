
import { useHover } from '../../hooks/useHover'

const buttonSize = (size) => {
    let fontSize = '0.8em';
    if (size === "sm") {
        fontSize = '0.5em';
    }
    if (size === "md") {
        fontSize = '1em';
    }
    if (size === "lg") {
        fontSize = '1.2em';
    }
    return fontSize;
}

const buttonStyles = (theme, size, style) => {
    let styles = {
        color: 'black',
        backgroundColor: "#fff",
        fontSize: buttonSize(size),
        border: '1px solid gray',
        padding: '0.5em',
        borderRadius: '0.2em',
    }

    if (theme == 'primary') {
        styles.color = '#fff';
        styles.backgroundColor = '#4298fa';
        styles.border = 'none';
    }
    return Object.assign(styles, style);
}

const Button = (props) => {
    let { theme, size, disabled, label, onClick, style } = props;
    style = buttonStyles(theme, size, style)
    const { buttonStyle, onMouseEnter, onMouseLeave } = useHover(theme, style)
    return (
        <button
            style={buttonStyle}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}


export default Button;