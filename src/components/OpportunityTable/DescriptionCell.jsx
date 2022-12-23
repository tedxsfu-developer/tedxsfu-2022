import React, { useState } from "react";
import LinkButton from "../Buttons/LinkButton";
import DisabledButton from "../Buttons/DisabledButton";

import arrow_drop_down from "../../images/arrow_drop_down.svg";
import arrow_drop_up from "../../images/arrow_drop_up.svg";
import IconButton from "../Buttons/IconButton";
import DescriptionText from "./DescriptionText";

const OpportunityTable = ({ opportunity }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleDescriptionClick = () => {
        setIsExpanded(!isExpanded);
    }
    const dropDownButton =
        <IconButton
            imgSrc={arrow_drop_down}
            alt="Expand description of this opportunity"
            label="Expand"
            aria-expanded="false"
            aria-controls={opportunity.id}
            className="no-border toggle icon-button"
            notShowLabel={true}
        />;

    const dropUpButton =
        <IconButton
            imgSrc={arrow_drop_up}
            alt="Collapse description of this opportunity"
            label="Collapse"
            aria-expanded="true"
            aria-controls={opportunity.id}
            className="no-border toggle icon-button"
            notShowLabel={true}
        />;

    return (
        <React.Fragment>
            <div id={opportunity.id}
                 className={`opportunity-description ${isExpanded ? "expanded" : "collapsed"}`}
                 role="button"
                 tabIndex={-1}
                 onClick={handleDescriptionClick}
                 onKeyDown={handleDescriptionClick}
            >
                <div className="description-text">
                    <DescriptionText opportunity={opportunity}/>
                </div>
                {isExpanded ? dropUpButton : dropDownButton}
            </div>

            {opportunity.status === "open" &&
                <LinkButton
                    link={opportunity.application_link}
                    label="Apply Now"
                    isInternal={false}
                    className='transparent'
                    shouldOpenInNewTab={true}
                />}
            {opportunity.status === "closed" &&
                <DisabledButton
                    label="Application Closed"
                />}
            {opportunity.status === "upcoming" &&
                <DisabledButton
                    label="Opening soon"
                />}
        </React.Fragment>
    );
}

export default OpportunityTable;