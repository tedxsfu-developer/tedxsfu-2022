import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = (props) => {
    return (
        <Helmet>
            <meta name="description" content={props.description}></meta>
            <title>{props.pageTitle}</title>
            <link rel="canonical" href={props.canonical}/>
        </Helmet>
    );
}

export default PageHelmet;