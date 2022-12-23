import React from "react";
import PageHelmet from "../../components/PageHelmet";
import OpportunityTable from "../../components/OpportunityTable/OpportunityTable";
import SimpleTextLink from "../../components/SimpleTextLink/SimpleTextLink";
import PageHelmets from "../../content/pageHelmets";
import OpportunityTableMobile from "../../components/OpportunityTable/OpportunityTableMobile";
import PageLayout from "../../components/PageLayout/PageLayout";

const OpportunityPage = () => {
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
            <PageHelmet
                pageTitle={PageHelmets.opportunity.pageTitle}
                canonical={PageHelmets.opportunity.canonical}
                description={PageHelmets.opportunity.description}
            />
            <PageLayout>
                <main id='opportunity' className='horizontally-centered fade-slide-in'>
                    <h1 className="page-title">{PageHelmets.opportunity.pageTitle}</h1>

                    {isDesktop && <OpportunityTable/>}
                    {!isDesktop && <OpportunityTableMobile/>}

                    <h2 className='inline'>Want to partner with us?</h2>
                    <SimpleTextLink link="/partner" isInternal={true}>
                        Become our partner ->
                    </SimpleTextLink>
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default OpportunityPage;