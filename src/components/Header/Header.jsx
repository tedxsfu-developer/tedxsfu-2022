import React, { useEffect, useState } from "react";
import DesktopNav from "../NavBar/DesktopNav";
import MainLogo from "../MainLogo/MainLogo";
import ConferenceInfo from "../../content/conference";

const Header = (props) => {
    const REM_UNIT = 16; //1rem = 16px

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            console.log(window.scrollY);
            if (typeof window !== 'undefined') {
                if (window.scrollY <= 0) {
                    setShow(true);
                } else if (window.scrollY > lastScrollY) {
                    setShow(false);
                } else {
                    setShow(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader);
            return () => {
                window.removeEventListener('scroll', controlHeader);
            };
        }
    }, [lastScrollY]);

    if (typeof window !== "undefined") {
        let viewportWidth = window.innerWidth;
        let headerChildren;
        if (viewportWidth >= 64 * REM_UNIT) {
            headerChildren =
                <React.Fragment>
                    <div className='flex-row'>
                        <MainLogo/>
                        <div className='conference-info'>
                            <div className='conference-info-item'>
                                <p>{ConferenceInfo.date}</p>
                                <p className='opaque-text all-caps'>Date</p>
                            </div>
                            <div className='conference-info-item'>
                                <p>{ConferenceInfo.time}</p>
                                <p className='opaque-text all-caps'>Time</p>
                            </div>
                            <div className='conference-info-item'>
                                <p>{ConferenceInfo.venue}</p>
                                <p className='opaque-text all-caps'>Venue</p>
                            </div>
                        </div>
                    </div>
                    <DesktopNav/>
                </React.Fragment>
        } else {
            headerChildren =
                <React.Fragment>
                    <div className='flex-row'>
                        <MainLogo/>
                        <div className='conference-info align-right'>
                            <p>{ConferenceInfo.date}, {ConferenceInfo.time}</p>
                            <p className='opaque-text'>{ConferenceInfo.venue}</p>
                        </div>
                    </div>
                </React.Fragment>
        }
        const header = <header
            className={`fade-slide-in look-through${!show ? ' hide' : ''}`}>{headerChildren}</header>;
        return header;
    }
};

export default Header;