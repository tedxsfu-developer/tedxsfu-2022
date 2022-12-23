import React, { useState } from "react";
import IconButton from "../Buttons/IconButton";
import arrow_drop_down from "../../images/arrow_drop_down.svg";
import arrow_drop_up from "../../images/arrow_drop_up.svg";
import LinkButton from "../Buttons/LinkButton";
import DisabledButton from "../Buttons/DisabledButton";
import DescriptionText from "./DescriptionText";

const DescriptionSection = (props) => {
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
            aria-controls={props.opportunity.id}
            className="no-border toggle icon-button"
            onClick={handleDescriptionClick}
            notShowLabel={true}
        />;

    const dropUpButton =
        <IconButton
            imgSrc={arrow_drop_up}
            alt="Collapse description of this opportunity"
            label="Collapse"
            aria-expanded="true"
            aria-controls={props.opportunity.id}
            className="no-border toggle icon-button"
            onClick={handleDescriptionClick}
            notShowLabel={true}
        />;

    return (
        <section key={props.opportunity.id} className={`opportunity-info ${props.className ? props.className : ''}`}>
            <h2>{props.opportunity.role}</h2>
            <div className='opportunity-details'>
                <h3 className="all-caps">Application Period</h3>
                <p>{props.opportunity.application_period}</p>
            </div>
            <div className='opportunity-details'>
                <div className='flex space-between'>
                    <h3 className="all-caps">Description</h3>
                    {isExpanded ? dropUpButton : dropDownButton}
                </div>
                <div id={props.opportunity.id}
                     className={`opportunity-description ${isExpanded ? "expanded" : "collapsed"}`}
                     role="button"
                     tabIndex={-1}
                     onClick={handleDescriptionClick}
                     onKeyDown={handleDescriptionClick}
                >
                    <div className="description-text">
                        <DescriptionText opportunity={props.opportunity}/>
                    </div>
                </div>
            </div>
            {props.opportunity.status === "open" &&
                <LinkButton
                    link={props.opportunity.application_link}
                    label="Apply Now"
                    isInternal={false}
                    className="transparent"
                    shouldOpenInNewTab={true}
                />}
            {props.opportunity.status === "closed" &&
                <DisabledButton
                    label="Application Closed"
                />}
            {props.opportunity.status === "upcoming" &&
                <DisabledButton
                    label="Opening soon"
                />}
        </section>
    );
}

export default DescriptionSection;