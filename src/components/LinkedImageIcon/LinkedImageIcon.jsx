import React from "react";

const LinkedImageIcon = ({ href, src, alt, className, ...rest }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer noopener" className="flex-item image-link">
            <img src={src}
                 alt={alt}
                 className={`image-icon ${className ? className : ''}`}
                 {...rest}
            />
        </a>
    );
}

export default LinkedImageIcon;