import React from "react";
import LinkButton from "./LinkButton";

const CtaButton = (props) => {
    const { className, ...rest } = props;
    return (
        <LinkButton {...(props.id && { id: props.id })} className='cta' {...rest} />
    );
}

export default CtaButton;