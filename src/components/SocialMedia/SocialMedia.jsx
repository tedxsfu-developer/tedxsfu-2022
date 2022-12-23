import React from "react";

import SocialMedia from "../../content/socialMedia";
import LinkedImageIcon from "../LinkedImageIcon/LinkedImageIcon";

const SocialMediaLink = () => {
    return (
        <div className="social-group flex">
            {SocialMedia.map((item) =>
                <LinkedImageIcon
                    key={item.name}
                    href={item.url}
                    src={item.logo}
                    alt={item.name}
                    className='filter-white'
                    width={item.width}
                    height={item.height}
                />
            )}
        </div>
    );
}

export default SocialMediaLink;