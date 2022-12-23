import React from "react";

const IconButton = (props) => {
    const { className, imgSrc, alt, label, notShowLabel, handleClick, ...rest } = props;
    return (
        <button className={`all-caps ${className}`} onClick={handleClick} {...rest}>
            <img src={imgSrc}
                 alt={alt}
                 width="16"
                 height="16"
                 className='filter-white'
            />
            <span className='all-caps' {...(notShowLabel && { className: 'no-show' })}>{label}</span>
        </button>
    );
}

export default IconButton;