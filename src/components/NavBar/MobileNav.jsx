import React, { useState } from "react";
import LinkButton from "../Buttons/LinkButton";
import arrow_right from "../../images/arrow_forward.svg";
import Navigation from "./Navigation";
import ConferenceInfo from "../../content/conference";
import Menu from "./Menu";

const MobileNav = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = (event) => {
        setShowMenu(showMenu => !showMenu);
    }

    // useEffect(() => {
    //     const body = document.querySelector('body');
    //     body.addEventListener('click', (event) => {
    //         if (showMenu) {
    //             setShowMenu(false);
    //         }
    //     })
    // }, [showMenu]);

    return (
        <div id='mobile-nav' className={`fade-slide-in${showMenu ? ' full-screen' : ''}`}>
            <div className='fixed-container look-through'>
                <LinkButton link="/opportunity"
                            label="Opportunities"
                            isInternal={true}
                            className='transparent'
                >
                    <img src={arrow_right} alt="Explore opportunities with TEDxSFU" width="16" height="16"
                         className="filter-white"/>
                </LinkButton>
                {!showMenu &&
                    <Menu
                        id='menu-toggle'
                        aria-label='Main menu'
                        aria-controls='menu'
                        aria-expanded={showMenu}
                        handleClick={handleClick}/>
                }
                {showMenu &&
                    <button id='close-menu' className='all-caps transparent' onClick={handleClick}>Close</button>}
            </div>
            <div className='popup-nav'>
                {showMenu &&
                    <div className='conference-info'>
                        <p>{ConferenceInfo.date}, {ConferenceInfo.time}</p>
                        <p className='opaque-text'>{ConferenceInfo.venue}</p>
                    </div>
                }
                <Navigation
                    id='menu'
                    aria-labelledby='menu-toggle'
                    aria-hidden={!showMenu}
                    showMenu={showMenu}
                />
            </div>
        </div>
    );
};

export default MobileNav;