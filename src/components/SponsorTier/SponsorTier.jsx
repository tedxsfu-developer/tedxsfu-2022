import React from "react";
import SponsorBio from "../SponsorBio/SponsorBio";

const SponsorTier = ({ tier, tierInfo }) => {
    return (
        <section id={tierInfo.id} className="sponsor-tier">
            {tierInfo.sponsors.length > 0 &&
                <>
                    <h2 className='all-caps'>{tierInfo.title}</h2>
                    <ul>
                        {tierInfo.sponsors.map((sponsor) =>
                            <SponsorBio key={sponsor.name} sponsor={sponsor}/>
                        )}
                    </ul>
                </>
            }
        </section>
    );
}

export default SponsorTier;