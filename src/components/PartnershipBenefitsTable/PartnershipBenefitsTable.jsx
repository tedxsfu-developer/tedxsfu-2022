import React from "react";
import PartnerWithUs from "../../content/partnerWithUs";
import BenefitItem from "./BenefitItem";

const PartnershipBenefitsTable = (props) => {
    const benefits = PartnerWithUs.partnershipBenefits.benefits;
    return (
        <ul id="benefits">
            {benefits.map((benefit, index) => {
                return (
                    <BenefitItem key={index} benefit={benefit}/>
                );
            })}
        </ul>
    );
}

export default PartnershipBenefitsTable;