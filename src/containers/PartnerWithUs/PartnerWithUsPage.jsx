import * as React from "react";
import PageHelmet from "../../components/PageHelmet";

import PageHelmets from "../../content/pageHelmets";
import PartnerWithUs from "../../content/partnerWithUs";
import CtaButton from "../../components/Buttons/CtaButton";
import PartnershipBenefitsTable from "../../components/PartnershipBenefitsTable/PartnershipBenefitsTable";
import PageLayout from "../../components/PageLayout/PageLayout";
import SimpleTextLink from "../../components/SimpleTextLink/SimpleTextLink";
import pastSponsors from "../../content/pastSponsors";

const PartnerWithUsPage = () => {
    const convertToParagraphList = (rawText) => {
        return rawText.split('\n');
    }

    const overviewParagraphs = convertToParagraphList(PartnerWithUs.overview.content);

    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.partner.pageTitle}
                canonical={PageHelmets.partner.canonical}
                description={PageHelmets.partner.description}
            />
            <PageLayout>
                <main id='partner-with-us' className='horizontally-centered fade-slide-in'>
                    <h1 className="page-title">{PartnerWithUs.overview.title}</h1>

                    <section id="overview" className='partner-info first-item'>
                        {overviewParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    </section>

                    <section id="past-sponsors" className='partner-info'>
                        <h2 className="all-caps">{PartnerWithUs.pastSponsors.title}</h2>
                        <ul>
                            {pastSponsors.map((sponsor, index) =>
                                <li key={sponsor.name}><img src={sponsor.logo.src}
                                                            alt={sponsor.name}
                                                            width={sponsor.logo.width}
                                                            height={sponsor.logo.height}/>
                                </li>
                            )}
                        </ul>
                    </section>

                    <section id="our-audience" className='partner-info'>
                        <h2 className="all-caps">{PartnerWithUs.audience.title}</h2>
                        <p>{PartnerWithUs.audience.content}</p>
                    </section>

                    <section id="partnership-benefits" className='partner-info'>
                        <h2 className="all-caps">{PartnerWithUs.partnershipBenefits.title}</h2>
                        <p>{PartnerWithUs.partnershipBenefits.content}</p>
                        <PartnershipBenefitsTable/>
                        <p>{PartnerWithUs.closing.content}</p>
                    </section>

                    <section id="contact" className='partner-info'>
                        <p>
                            {PartnerWithUs.contact.content} <SimpleTextLink
                            link={`mailto:${PartnerWithUs.contact.contact_email}`}
                            isInternal={false}
                            shouldOpenInNewTab={false}
                        >
                            {PartnerWithUs.contact.contact_email}
                        </SimpleTextLink>
                        </p>
                        <CtaButton link={`mailto:${PartnerWithUs.contact.contact_email}`}
                                   label="Let's connect"
                                   id="contact-pr"
                                   isInternal={false}
                                   shouldOpenInNewTab={false}
                        />
                    </section>
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default PartnerWithUsPage