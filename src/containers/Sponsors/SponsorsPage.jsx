import React from "react";
import PageHelmet from "../../components/PageHelmet";

import PageHelmets from "../../content/pageHelmets";
import PageLayout from "../../components/PageLayout/PageLayout";

import Sponsors from "../../content/sponsors";
import SponsorTier from "../../components/SponsorTier/SponsorTier";
import SimpleTextLink from "../../components/SimpleTextLink/SimpleTextLink";

const SponsorsPage = () => {
    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.sponsors.pageTitle}
                canonical={PageHelmets.sponsors.canonical}
                description={PageHelmets.sponsors.description}/>
            <PageLayout>
                <main id='sponsors' className="horizontally-centered fade-slide-in">
                    <h1 className="page-title">{PageHelmets.sponsors.pageTitle}</h1>
                    {Object.entries(Sponsors).map(([tier, tierInfo]) =>
                        <SponsorTier key={tier} tier={tier} tierInfo={tierInfo}/>
                    )}
                    <h2 className='inline'>Want to partner with us?</h2>
                    <SimpleTextLink link="/partner" isInternal={true}>
                        Become our partner ->
                    </SimpleTextLink>
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default SponsorsPage;