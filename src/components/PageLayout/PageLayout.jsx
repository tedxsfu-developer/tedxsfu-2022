import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MobileNav from "../NavBar/MobileNav";

const PageLayout = (props) => {
    const REM_UNIT = 16; //1rem = 16px
    if (typeof window !== "undefined") {
        let viewportWidth = window.innerWidth;
        let pageLayout;
        if (viewportWidth >= 64 * REM_UNIT) {
            pageLayout = (
                <React.Fragment>
                    {/*<StickyNotification/>*/}
                    <Header/>
                    {props.children}
                    <Footer/>
                </React.Fragment>
            );
        } else {
            pageLayout = (
                <React.Fragment>
                    {/*<StickyNotification/>*/}
                    <Header/>
                    <MobileNav/>
                    {props.children}
                    <Footer/>
                </React.Fragment>
            );
        }
        return pageLayout;
    } else {
        return <></>
    }
}

export default PageLayout;