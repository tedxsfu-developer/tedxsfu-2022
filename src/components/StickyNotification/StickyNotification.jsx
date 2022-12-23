import React, { useEffect, useState } from "react";
import SimpleTextLink from "../SimpleTextLink/SimpleTextLink";

const StickyNotification = ({ children }) => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const REM_UNIT = 16;
    let isDesktop = false;
    if (typeof window !== 'undefined' && window.innerWidth >= 64 * REM_UNIT) {
        isDesktop = true;
    }

    useEffect(() => {
        const controlStickyNotification = () => {
            if (typeof window !== 'undefined' && !isDesktop) {
                if (window.scrollY > lastScrollY) {
                    setShow(false);
                } else {
                    setShow(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlStickyNotification);
            return () => {
                window.removeEventListener('scroll', controlStickyNotification);
            };
        }
    }, [lastScrollY]);

    return (
        <div id="notification" className={`look-through fade-slide-in ${!show && 'hidden'}`}>
            <p>Ticket sales close on Monday, October 31, 11:59pm. <SimpleTextLink
                link="/tickets"
                isInternal={true}
                shouldOpenInNewTab={false}
            >Grab your tickets before it's too late!</SimpleTextLink></p>
        </div>
    );
}

export default StickyNotification;