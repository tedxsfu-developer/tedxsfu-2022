import React from "react";
import hamburger_menu from "../../images/menu.svg";
import IconButton from "../Buttons/IconButton";

const Menu = ({ handleClick, ...rest }) => {
    return (
        <IconButton imgSrc={hamburger_menu}
                    alt="menu"
                    label='Menu'
                    className='no-border fade-slide-in'
                    notShowLabel={false}
                    handleClick={handleClick}
                    {...rest}
        />
    );
};

export default Menu;