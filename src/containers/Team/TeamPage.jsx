import React, { useEffect, useState } from "react";
import PageHelmet from "../../components/PageHelmet";
import PageHelmets from "../../content/pageHelmets";
import PageLayout from "../../components/PageLayout/PageLayout";
import DesktopTeamNav from "../../components/TeamNav/DesktopTeamNav";

import Teams from "../../content/teams";
import TeamsSecondary from "../../content/teamsSecondary";
import TeamBio from "../../components/TeamBio/TeamBio";
import MobileTeamNav from "../../components/TeamNav/MobileTeamNav";

const TeamPage = () => {
    const REM_UNIT = 16; //1rem = 16px
    const [lastScrollY, setLastScrollY] = useState(0);

    let isDesktop = false;
    if (typeof window !== "undefined") {
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let isLandscape = viewportWidth > viewportHeight;
        isDesktop = isLandscape && viewportWidth >= 75 * REM_UNIT;
    }
    
    useEffect(() => {
        const windowHeight = window.innerHeight;
        const teamBios = document.querySelectorAll('.team-bio');
        const teamNavItems = document.querySelectorAll('nav#desktop-team-nav .nav-item');

        const resetActiveIndicator = () => {
            for (let i = 0; i < teamNavItems.length; i++) {
                teamNavItems[i].classList.remove('active');
            }
        }

        const handleTeamsScroll = () => {
            if (typeof window !== "undefined") {
                teamBios.forEach((team, teamIndex) => {
                    if (team.offsetTop < lastScrollY + windowHeight / 2 &&
                        lastScrollY < team.offsetTop + windowHeight / 2
                    ) {
                        resetActiveIndicator();
                        teamNavItems[teamIndex].classList.add('active');
                    }
                })
                setLastScrollY(window.scrollY);
            }
        }

        const handleTeamNavItemClick = (itemOrder) => {
            if (typeof window !== "undefined") {
                resetActiveIndicator();
                teamNavItems[itemOrder].classList.add('active');

                window.scrollTo({
                    top: teamBios[itemOrder].offsetTop - windowHeight / 12,
                    behavior: "smooth",
                });
            }
        }

        if (typeof window !== "undefined") {
            window.addEventListener('scroll', handleTeamsScroll);

            teamNavItems.forEach((navItem, itemIndex) => {
                navItem.addEventListener('click', (event) => {
                    event.preventDefault();
                    handleTeamNavItemClick(itemIndex);
                });
            })

            return () => {
                window.removeEventListener('scroll', handleTeamsScroll);
                teamNavItems.forEach((navItem, itemIndex) => {
                    navItem.removeEventListener('click', () => handleTeamNavItemClick(itemIndex));
                });
            };
        }
    }, [lastScrollY]);

    // useEffect(() => {
    //     const handlePageReload = () => {
    //         if (typeof window !== "undefined") {
    //             window.scrollTo({ top: 0, behavior: 'smooth' });
    //         }
    //     }
    //     handlePageReload();
    // }, []);

    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.team.pageTitle}
                canonical={PageHelmets.team.canonical}
                description={PageHelmets.team.description}/>
            <PageLayout>
                {isDesktop &&
                    <div className='big-container'>
                        <DesktopTeamNav/>
                        <main id='team' className='horizontally-centered fade-slide-in'>
                            <h1 className='page-title'>Meet the team</h1>
                            <section className='team-group'>{Teams.map(team => <TeamBio key={team.id}
                                                                                        team={team}/>)}</section>
                            <section className='team-group'>{TeamsSecondary.map(team => <TeamBio key={team.id}
                                                                                                 team={team}/>)}</section>
                        </main>
                    </div>
                }
                {!isDesktop &&
                    <React.Fragment>
                        <h1 className='team page-title fade-slide-in'>Meet the team</h1>
                        <MobileTeamNav/>
                        <main id='team' className='horizontally-centered fade-slide-in'>
                            <section id='oc-team' className='team-group'>{Teams.map(team => <TeamBio key={team.id}
                                                                                                     team={team}/>)}</section>
                            <section className='team-group'>{TeamsSecondary.map(team => <TeamBio key={team.id}
                                                                                                 team={team}/>)}</section>
                        </main>
                    </React.Fragment>
                }
            </PageLayout>
        </React.Fragment>
    );
}

export default TeamPage;