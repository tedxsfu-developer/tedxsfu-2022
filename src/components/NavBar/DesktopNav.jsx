import React, { useState } from "react";
import LinkButton from "../Buttons/LinkButton";
import arrow_right from "../../images/arrow_forward.svg";
import Navigation from "./Navigation";
import Menu from "./Menu";

const DesktopNav = (props) => {
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
        <div id='desktop-nav' className='fade-slide-in'>
            <LinkButton link="/opportunity"
                        label="Opportunities"
                        isInternal={true}
                        className='transparent'
            >
                <img src={arrow_right} alt="Explore opportunities with TEDxSFU" width="16" height="16"
                     className="filter-white"/>
            </LinkButton>
            <Menu
                id='menu-toggle'
                aria-label='Main menu'
                aria-controls='menu'
                aria-expanded={showMenu}
                handleClick={handleClick}/>
            <Navigation
                id='menu'
                aria-labelledby='menu-toggle'
                aria-hidden={!showMenu}
                showMenu={showMenu}
            />
        </div>
    );
};

export default DesktopNav;