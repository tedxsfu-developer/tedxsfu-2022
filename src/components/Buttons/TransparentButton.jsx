import React from "react";
import LinkButton from "./LinkButton";

const TransparentButton = (props) => {
    const { className, ...rest } = props;
    return (
        <LinkButton className='transparent' {...rest} />
    );
}

export default TransparentButton;