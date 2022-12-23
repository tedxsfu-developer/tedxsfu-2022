import React from "react";
import { Link } from "gatsby";

const SimpleTextLink = (props) => {
    const className = "simple-link";

    let link = props.isInternal
        ? <Link to={props.link} className={className}>{props.children}</Link>
        : <a href={props.link}
             className={className}
             {...(props.shouldOpenInNewTab && { target: "_blank" })}
             rel="noopener noreferrer">{props.children}</a>;
    return link;
};

export default SimpleTextLink;