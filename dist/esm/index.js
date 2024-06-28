import React, { useState } from 'react';

const BabalButton = ({ title, onclick, style, width, height, icon, hover, hoverStyle }) => {
    const [isHover, setIsHover] = useState(false);
    const defaultStyles = Object.assign({ backgroundColor: "#280154", display: 'flex', justifyContent: "center", alignItems: "center", gap: "8px", color: "white", border: "1px solid #280154", padding: "0.8rem", height, // Set the height from props
        width }, (hover && isHover ? hoverStyle : {}));
    const combinedStyle = Object.assign(Object.assign({}, defaultStyles), style);
    return (React.createElement("button", { onClick: onclick, style: combinedStyle },
        title,
        icon));
};

export { BabalButton };
//# sourceMappingURL=index.js.map
