import React from "react";
import "./src/styles/global.sass";
import "./src/styles/imports.sass";
// import "./src/script/ticket.js";

export const wrapPageElement = ({ element, ...props }) => {
    return (
        <React.Fragment>
            {element}
        </React.Fragment>
        // <PageWrapper {...props}>{element}</PageWrapper>
    );
}