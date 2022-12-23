import React from "react";
import DesktopSpeakerBio from "./DesktopSpeakerBio";
import MobileSpeakerBio from "./MobileSpeakerBio";

const SpeakerInfo = ({ speaker }) => {
    const REM_UNIT = 16; //1rem = 16px

    let isDesktop = false;
    if (typeof window !== "undefined") {
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let isLandscape = viewportWidth > viewportHeight;
        isDesktop = isLandscape && viewportWidth >= 64 * REM_UNIT;
    }

    return (
        <React.Fragment>
            {isDesktop && <DesktopSpeakerBio speaker={speaker}/>}
            {!isDesktop && <MobileSpeakerBio speaker={speaker}/>}
        </React.Fragment>
    );
}

export default SpeakerInfo;