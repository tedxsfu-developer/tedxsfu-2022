import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import TeamMemberBio from "../../components/TeamMemberBio/TeamMemberBio";
import PageHelmet from "../../components/PageHelmet";
import { Link } from "gatsby";
import arrow_back from "../../images/arrow_back.svg";


const IndividualTeamContainer = ({ pageContext }) => {
    const { teamInfo } = pageContext;
    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={`Meet ${teamInfo.name}`}
                canonical={`https://www.tedxsfu.com/team/${teamInfo.id}`}
                description={teamInfo.intro}/>
            <PageLayout>
                <Link to='/team' className='all-caps fade-slide-in simple-link' id='back-to-meet-the-team'>
                    <img src={arrow_back} alt="Back to Meet all the Teams" width="16"
                         height="16"
                         className="filter-white"/>Back</Link>
                <main id='individual-team' className='fade-slide-in'>
                    <div className='reverse-order'>
                        <h1 className='page-title'>{teamInfo.name}</h1>
                        <h2 className='all-caps'>Meet the team</h2>
                    </div>
                    <p className='team-intro'>{teamInfo.intro}</p>
                    {teamInfo.members.map((member, index) => {
                            let shouldDisplayImageFirst = true;
                            if (typeof window !== "undefined") {
                                const REM_UNIT = 16;
                                const viewportWidth = window.innerWidth;
                                const isDesktop = viewportWidth >= 48 * REM_UNIT;
                                if (isDesktop) {
                                    shouldDisplayImageFirst = index % 2 === 0;
                                }
                            }
                            return <TeamMemberBio member={member} shouldDisplayImageFirst={shouldDisplayImageFirst}/>
                        }
                    )}
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default IndividualTeamContainer;