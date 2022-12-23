import React from "react";
import dot from "../../images/dot.svg";
import LinkedImageIcon from "../LinkedImageIcon/LinkedImageIcon";

import email from "../../images/social-media/newsletter.svg";
import instagram from "../../images/social-media/instagram.svg";
import facebook from "../../images/social-media/facebook.svg";
import linkedin from "../../images/social-media/linkedIn.svg";
import website from "../../images/social-media/website.svg";


const TeamMemberBio = ({ member, shouldDisplayImageFirst }) => {
    return (
        <section className={`member-bio grid${shouldDisplayImageFirst ? '' : ' reverse-order'}`}>
            {shouldDisplayImageFirst &&
                <img src={`${member.img.src}`} alt={member.name} width={member.img.width} height={member.img.height}/>}
            <div className='member-info'>
                <h2>{member.name} {member.pronoun ? `(${member.pronoun})` : ''}</h2>
                <h3 className='all-caps'>{member.role}</h3>
                <p className='intro'>{member.bio.intro}</p>
                {member.bio.funFacts &&
                    <ul className='fun-fact-list'>{member.bio.funFacts.map(funFact =>
                        <li className='fun-fact-item'>
                            <img src={dot}
                                 alt='responsibility item'
                                 width="16"
                                 height="16"
                                 className="filter-white"
                            />
                            {funFact}
                        </li>)}
                    </ul>
                }
                {member.socialMedia && Object.keys(member.socialMedia).length > 0 &&
                    <React.Fragment>
                        <p>Follow {member.name} on social media:</p>
                        <ul className='social-media-list'>

                            {member.socialMedia.linkedin && <li className='social-media-item'><LinkedImageIcon
                                key='linkedin'
                                href={member.socialMedia.linkedin}
                                src={linkedin}
                                alt={`LinkedIn of ${member.name}`}
                                className='filter-white'
                                width='48'
                                height='48'
                            /></li>}


                            {member.socialMedia.instagram && <li className='social-media-item'><LinkedImageIcon
                                key='instagram'
                                href={member.socialMedia.instagram}
                                src={instagram}
                                alt={`Instagram of ${member.name}`}
                                className='filter-white'
                                width='48'
                                height='48'
                            /></li>}

                            {member.socialMedia.facebook && <li className='social-media-item'><LinkedImageIcon
                                key='facebook'
                                href={member.socialMedia.facebook}
                                src={facebook}
                                alt={`Facebook of ${member.name}`}
                                className='filter-white'
                                width='48'
                                height='48'
                            /></li>}
                            {member.socialMedia.email && <li className='social-media-item'><LinkedImageIcon
                                key='email'
                                href={member.socialMedia.email}
                                src={email}
                                alt={`Email of ${member.name}`}
                                className='filter-white'
                                width='48'
                                height='48'
                            /></li>}
                            {member.socialMedia.website && <li className='social-media-item'><LinkedImageIcon
                                key='website'
                                href={member.socialMedia.website}
                                src={website}
                                alt={`Website of ${member.name}`}
                                className='filter-white'
                                width='48'
                                height='48'
                            /></li>}
                        </ul>
                    </React.Fragment>
                }
            </div>
            {!shouldDisplayImageFirst &&
                <img src={`${member.img.src}`} alt={member.name} width={member.img.width} height={member.img.height}/>}
        </section>
    );
}

export default TeamMemberBio;