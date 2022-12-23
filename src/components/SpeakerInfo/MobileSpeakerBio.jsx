import React, { useState } from "react";
import expand_up from "../../images/expand_less.svg";
import expand_down from "../../images/expand_more.svg";
import IconButton from "../Buttons/IconButton";

const MobileSpeakerBio = ({ speaker }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleBioClick = () => {
        setIsExpanded(!isExpanded);
    }

    const expandUpButton =
        <IconButton
            imgSrc={expand_up}
            alt="Read speaker's bio and talk intro"
            label="Read bio"
            aria-expanded="false"
            aria-controls={speaker.name}
            className="no-border toggle icon-button"
            notShowLabel={false}
        />;

    const expandDownButton =
        <IconButton
            imgSrc={expand_down}
            alt="Close speaker's bio and talk intro"
            label="Close bio"
            aria-expanded="true"
            aria-controls={speaker.name}
            className="no-border toggle icon-button"
            notShowLabel={false}
        />;

    return (
        <React.Fragment>
            <img src={speaker.img.mobile.src}
                 alt={speaker.name}
                 width={speaker.img.mobile.width}
                 height={speaker.img.mobile.height}
                 className='full-screen'/>
            <article id={speaker.name}
                     className={`speaker-bio ${isExpanded ? "expanded look-through" : "collapsed"}`}
                     role="button"
                     tabIndex={-1}
                     onClick={handleBioClick}
                     onKeyDown={handleBioClick}
            >
                {!isExpanded && expandUpButton}
                {speaker.talk.title &&
                    <h2 className='talk-title'>{speaker.talk.title}</h2>}
                <div>
                    <h2 className='speaker-name'>{speaker.name} ({speaker.pronouns})</h2>
                    <h3 className='all-caps speaker-title'>{speaker.title}</h3>
                </div>
                {isExpanded &&
                    <React.Fragment>
                        <p className='bio'>{speaker.bio}</p>
                        <p className='intro'>{speaker.talk.intro}</p>
                    </React.Fragment>
                }
                {isExpanded && expandDownButton}
            </article>
        </React.Fragment>
    );
}

export default MobileSpeakerBio;