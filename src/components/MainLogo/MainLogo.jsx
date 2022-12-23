import { Link } from "gatsby";
import React from "react";

import tedxsfu_logo from "../../images/tedxsfu_logo_white.svg";

const MainLogo = () => {
    return (
        <Link to="/">
            <img
                id="site-logo"
                src={tedxsfu_logo}
                alt="TEDxSFU logo"
                width="16"
                height="16"
            />
        </Link>
    );
}

export default MainLogo;