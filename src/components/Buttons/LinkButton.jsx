import React from "react";
import { Link } from "gatsby";

const LinkButton = (props) => {
    const className = `button all-caps ${props.className}`;
    const button = props.isInternal
        ? <Link to={props.link} className={className}>{props.label}{props.children && props.children}</Link>
        :
        <a className={className}
           href={props.link}
           {...(props.id && { id: props.id })}
           {...(props.shouldOpenInNewTab && { target: "_blank" })}
           rel="noopener noreferrer"
        >
            {props.label}{props.children && props.children}
        </a>;
    return button;
};

export default LinkButton;