import React from "react";
import arrow_right from "../../images/arrow_forward.svg";
import SimpleTextLink from "../SimpleTextLink/SimpleTextLink";

const TeamBio = ({ team }) => {
    return (
        <article id={team.id} className='team-bio'>
            <img src={team.img.src} alt={team.name} width={team.img.width} height={team.img.height}/>
            <div className='team-summary'>
                <h2>{team.name}</h2>
                <ul className='member-list'>
                    {team.members.map(member =>
                        <li className='member-item' key={member.name}>
                            <p className='member-name'>{member.name} ({member.pronoun})</p>
                            <p className='member-role all-caps'>{member.role}</p>
                        </li>)}
                </ul>
                <SimpleTextLink link={`/team/${team.id}`}
                                isInternal={true}
                                shouldOpenInNewTab={false}
                >Meet {team.name}<img src={arrow_right}
                                      alt={`Meet ${team.name}`}
                                      width="16"
                                      height="16"
                                      className="filter-white"/>
                </SimpleTextLink>
            </div>
        </article>
    );
}

export default TeamBio;