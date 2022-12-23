import React from "react";
import PageHelmet from "../../components/PageHelmet";
import PageHelmets from "../../content/pageHelmets";
import PageLayout from "../../components/PageLayout/PageLayout";
import About from "../../content/about";
import AboutSection from "../../components/AboutSection/AboutSection";

const AboutPage = () => {
    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.about.pageTitle}
                canonical={PageHelmets.about.canonical}
                description={PageHelmets.about.description}/>
            <PageLayout>
                <main id='about' className='horizontally-centered fade-slide-in'>
                    {About.map((aboutInfo, index) => {
                        if (index === 0) {
                            return <AboutSection info={aboutInfo} expanded={true}/>
                        } else {
                            return <AboutSection info={aboutInfo} expanded={false}/>
                        }
                    })}
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default AboutPage;