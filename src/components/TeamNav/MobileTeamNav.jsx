import React from "react";
import { Link } from "gatsby";
import Teams from "../../content/teams";
import TeamsSecondary from "../../content/teamsSecondary";

const DesktopTeamNav = (props) => {
    return (
        <nav id='mobile-team-nav' className='look-through'>
            {Teams.map(team => <Link to={`#${team.id}`} className='nav-item all-caps'>{team.name}</Link>)}
            {TeamsSecondary.map(team => <Link to={`#${team.id}`} className='nav-item all-caps'>{team.name}</Link>)}
        </nav>
    );
}

export default DesktopTeamNav;