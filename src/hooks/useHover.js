import { useState } from "react";


function useHover(theme, style) {
    
    const [buttonStyle, setStyle] = useState(style);

    let _style = {
        ...buttonStyle,
        color: "#51a1fb",
        border: "1px solid #51a1fb",
    }

    if (theme === "primary") {
        _style = Object.assign(_style, {
            color: '#fff',
            backgroundColor: '#0074f9',
            border: 'none'
        })
    }

    const onMouseEnter = () => setStyle(_style)
    const onMouseLeave = () => setStyle(style)

    return { buttonStyle, onMouseEnter, onMouseLeave }
}

export { useHover }