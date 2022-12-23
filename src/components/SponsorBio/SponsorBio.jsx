import React from "react";
import LinkButton from "../Buttons/LinkButton";
import arrow_right from "../../images/arrow_forward.svg";

const SponsorBio = ({ sponsor }) => {
    return (
        <li className='sponsor-bio'>
            <div className='profile'>
                <img src={sponsor.logo.src} alt={sponsor.name} width={sponsor.logo.width} height={sponsor.logo.height}
                     className='full-width'/>
                <h3>{sponsor.name}</h3>
            </div>
            {sponsor.website && <LinkButton link={sponsor.website}
                                            label="Visit Site"
                                            isInternal={false}
                                            shouldOpenInNewTab={true}
                                            className='transparent sponsor-link full-width'
            >
                <img src={arrow_right} alt={`Go to ${sponsor.name} website`} width="16" height="16"
                     className="filter-white"/>
            </LinkButton>
            }
        </li>
    );
}

export default SponsorBio;