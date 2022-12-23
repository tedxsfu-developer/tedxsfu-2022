import React from "react";
import PageHelmet from "../../components/PageHelmet";
import SimpleTextLink from "../../components/SimpleTextLink/SimpleTextLink";

import PageHelmets from "../../content/pageHelmets";
import PageLayout from "../../components/PageLayout/PageLayout";

import arrow_right from "../../images/arrow_forward.svg";
import arrow_down from "../../images/arrow_downward.svg";

const IndexPage = () => {
    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.home.pageTitle}
                canonical={PageHelmets.home.canonical}
                description={PageHelmets.home.description}/>
            <PageLayout>
                <main id='home' className="horizontally-centered fade-slide-in">
                    <section id="coming-soon" className='home-section'>
                        <h1 className="page-title">
                            The TEDxSFU team is working hard putting together this year’s conference—details coming
                            in
                            August 2022.
                        </h1>
                        <SimpleTextLink link="#about-tedx" isInternal={true}>
                            What is TEDx?
                            <img src={arrow_down} alt="Read more about What is TEDx" width="16" height="16"
                                 className="filter-white"/>
                        </SimpleTextLink>
                    </section>
                    <section id="about-tedx" className='home-section'>
                        <h2>What is TEDx?</h2>
                        <p>
                            In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a
                            program of local, self-organized events that bring people together to share a TED-like
                            experience. Our event is called TEDxSFU, where x = independently organized TED event. At our
                            TEDxSFU event, TED Talks video and live speakers will combine to spark deep discussion and
                            connection in a small group. The TED Conference provides general guidance for the TEDx
                            program, but individual TEDx events, including ours, are self-organized.
                        </p>
                        <SimpleTextLink link="https://www.ted.com/tedx"
                                        isInternal={false}
                                        shouldOpenInNewTab={true}
                        >
                            Link to TEDx Program
                            <img src={arrow_right} alt="Go to TEDx Program on TED website" width="16" height="16"
                                 className="filter-white"/>
                        </SimpleTextLink>
                    </section>
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default IndexPage