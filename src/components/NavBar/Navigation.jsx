import React, { useState } from "react";
import { Link } from "gatsby";

import Menu from "../../content/menu";

const Navigation = ({ showMenu, ...rest }) => {
    const pathname = typeof window !== "undefined" ? window.location.pathname : null;
    const [active, setActive] = useState(pathname);
    return (
        <nav className={`${showMenu ? 'show look-through' : 'display-none'}`} {...rest}>
            {Menu.map((navItem, index) =>
                <Link to={navItem.href} key={navItem.id}
                      className={`nav-item ${active === navItem.href ? 'active' : ''}`}
                      onClick={() => setActive(navItem.href)}
                      activeClassName='active'>
                    <div className='menu-description'>
                        <p className="all-caps">{navItem.title}</p>
                        <p>{navItem.subtitle}</p>
                    </div>
                </Link>
            )}
        </nav>
    );
}

export default Navigation;