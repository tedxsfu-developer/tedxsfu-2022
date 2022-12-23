import React from "react";

const DisabledButton = (props) => {
    const className = `button disabled all-caps ${props.className}`;
    return (
        <button type='button' disabled className={className}>{props.label}</button>
    );
};

export default DisabledButton;