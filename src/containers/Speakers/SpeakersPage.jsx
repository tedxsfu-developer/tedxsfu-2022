import React, { useEffect, useState } from "react";
import PageHelmets from "../../content/pageHelmets";
import PageHelmet from "../../components/PageHelmet";
import PageLayout from "../../components/PageLayout/PageLayout";
import Speakers from "../../content/speakers";
import SpeakerInfo from "../../components/SpeakerInfo/SpeakerInfo";

const SpeakersPage = () => {
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const windowHeight = window.innerHeight;
        const speakerList = document.querySelector('ul#speaker-list');
        const speakerItems = document.querySelectorAll('li.speaker-item');
        const speakerIndicatorList = document.querySelector('ul#speaker-list-indicator');
        const speakerIndicatorItems = document.querySelectorAll('ul#speaker-list-indicator li');

        const resetActiveIndicator = () => {
            for (let i = 0; i < speakerIndicatorList.children.length; i++) {
                speakerIndicatorList.children[i].classList.remove('active');
            }
        }

        const handleSpeakerListScroll = () => {
            if (typeof window !== "undefined") {
                speakerItems.forEach((speakerItem, speakerItemIndex) => {
                    if (speakerItem.offsetTop < lastScrollY + windowHeight / 2 &&
                        lastScrollY < speakerItem.offsetTop + windowHeight / 2
                    ) {
                        resetActiveIndicator();
                        speakerIndicatorList.children[speakerItemIndex].classList.add('active');
                    }
                })
                setLastScrollY(window.scrollY);
            }
        }

        const handleSpeakerIndicatorClick = (itemOrder) => {
            if (typeof window !== "undefined") {
                window.scrollTo({
                    top: speakerList.children[itemOrder].offsetTop,
                    behavior: "smooth",
                });
            }
        }

        if (typeof window !== "undefined") {
            window.addEventListener('scroll', handleSpeakerListScroll);

            speakerIndicatorItems.forEach((indicator, indicatorIndex) => {
                indicator.addEventListener('click', () => {
                    handleSpeakerIndicatorClick(indicatorIndex);
                });
            })

            return () => {
                window.removeEventListener('scroll', handleSpeakerListScroll);
                speakerIndicatorItems.forEach((indicator, indicatorIndex) => {
                    indicator.removeEventListener('click', () => handleSpeakerIndicatorClick(indicatorIndex));
                });
            };
        }
    }, [lastScrollY]);

    useEffect(() => {
        const handlePageReload = () => {
            if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        handlePageReload();
    }, []);

    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.speakers.pageTitle}
                canonical={PageHelmets.speakers.canonical}
                description={PageHelmets.speakers.description}/>
            <PageLayout>
                <main id='speakers' className='fade-slide-in'>
                    <h1 className='display-none'>TEDxSFU 2022 Speakers</h1>
                    <ul id='speaker-list'>
                        {Speakers.map(speaker =>
                            <li key={`${speaker.id}-info`} id={`${speaker.id}-info`}
                                className='speaker-item speaker-container'>
                                <SpeakerInfo speaker={speaker}/>
                            </li>)}
                    </ul>
                    <ul id='speaker-list-indicator'>
                        {Speakers.map((speaker, speakerIndex) => {
                            if (speakerIndex === 0) {
                                return (
                                    <li key={`${speaker.id}-info`} className='indicator-item active'>
                                        <a href={`#${speaker.id}-info`} className='hidden'>{speaker.id}</a>
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={`${speaker.id}-info`} className='indicator-item'>
                                        <a href={`#${speaker.id}-info`} className='hidden'>{speaker.id}</a>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default SpeakersPage;