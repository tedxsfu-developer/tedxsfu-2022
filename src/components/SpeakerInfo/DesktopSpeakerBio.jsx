import React, { useState } from "react";

const DesktopSpeakerBio = ({ speaker }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleIntroClick = (event) => {
        event.preventDefault();
        setIsExpanded(!isExpanded);
        console.log(isExpanded);
    }
    return (
        <React.Fragment>
            <img src={speaker.img.desktop.src}
                 alt={speaker.name}
                 width={speaker.img.desktop.width}
                 height={speaker.img.desktop.height}
                 className='full-screen'/>
            <div className='bio-container'>
                <article className='speaker-bio collapsed'>
                    {speaker.talk.title &&
                        <h2 className='talk-title'>{speaker.talk.title}</h2>}
                    <div>
                        <h2 className='speaker-name'>{speaker.name} ({speaker.pronouns})</h2>
                        <h3 className='all-caps speaker-title'>{speaker.title}</h3>
                    </div>
                    <p className='bio'>{speaker.bio}</p>
                </article>
                {!isExpanded &&
                    <button className='talk-intro-toggle open all-caps' onClick={handleIntroClick}>
                        Read talk intro
                    </button>
                }
                {isExpanded &&
                    <button className='talk-intro-toggle close all-caps' onClick={handleIntroClick}>
                        Close talk intro
                    </button>
                }
                {isExpanded &&
                    <article className='speaker-bio expanded full-talk-intro'>
                        {speaker.talk.title &&
                            <h2 className='talk-title'>{speaker.talk.title}</h2>}
                        <div>
                            <h2 className='speaker-name'>{speaker.name}</h2>
                            <h3 className='all-caps speaker-title'>{speaker.title}</h3>
                        </div>
                        <p className='intro'>{speaker.talk.intro}</p>
                    </article>
                }
            </div>
        </React.Fragment>
    );
}

export default DesktopSpeakerBio;