import React, { useState } from "react";
import SimpleTextLink from "../SimpleTextLink/SimpleTextLink";
import IconButton from "../Buttons/IconButton";
import arrow_drop_down from "../../images/arrow_drop_down.svg";
import arrow_drop_up from "../../images/arrow_drop_up.svg";

const AboutSection = ({ info, expanded }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);
    const handleSectionClick = () => {
        setIsExpanded(!isExpanded);
    }

    const dropDownButton =
        <IconButton
            imgSrc={arrow_drop_down}
            alt="Expand description of this about section"
            label="Expand"
            aria-expanded="false"
            aria-controls={info.id}
            className="no-border toggle icon-button"
            onClick={handleSectionClick}
            notShowLabel={true}
        />;

    const dropUpButton =
        <IconButton
            imgSrc={arrow_drop_up}
            alt="Collapse description of this about section"
            label="Collapse"
            aria-expanded="true"
            aria-controls={info.id}
            className="no-border toggle icon-button"
            onClick={handleSectionClick}
            notShowLabel={true}
        />;
    return (
        <section id={info.id} className={`about-section ${isExpanded ? "expanded" : "collapsed"}`}
                 role="button"
                 tabIndex={-1}
                 onClick={handleSectionClick}
                 onKeyDown={handleSectionClick}>
            <div className="flex-header">
                {info.id === 'reflection' && <h2>About <mark>Reflection</mark></h2>}
                {info.id !== 'reflection' && <h2>{info.title}</h2>}
                {isExpanded ? dropUpButton : dropDownButton}
            </div>
            <div className="info-text">
                <p>{info.content}</p>
                {info.id === 'ted' &&
                    <p>
                        Follow TED on Twitter at <SimpleTextLink link="https://twitter.com/TEDTalks" isInternal={false}
                                                                 shouldOpenInNewTab={true}>
                        https://twitter.com/TEDTalks
                    </SimpleTextLink>, or on Facebook at <SimpleTextLink link="https://www.facebook.com/TED"
                                                                         isInternal={false} shouldOpenInNewTab={true}>
                        https://www.facebook.com/TED
                    </SimpleTextLink>.
                    </p>
                }
            </div>
        </section>
    );
}

export default AboutSection;