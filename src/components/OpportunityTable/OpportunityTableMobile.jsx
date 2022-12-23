import React from "react";
import Opportunities from "../../content/opportunities";
import DescriptionSection from "./DescriptionSection";

const OpportunityTableMobile = (props) => {
    return (
        <div id="opportunity-table">
            {Opportunities.map((opportunity, index) => {
                if (index === 0) {
                    return <DescriptionSection key={index} opportunity={opportunity} className='first-item'/>
                } else {
                    return <DescriptionSection key={index} opportunity={opportunity}/>
                }
            })}
        </div>
    );
}

export default OpportunityTableMobile;