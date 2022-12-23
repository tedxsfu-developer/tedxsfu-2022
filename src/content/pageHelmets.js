const buildPageHelmet = (pageTitle, canonical, description) => {
    return {
        pageTitle: pageTitle,
        canonical: canonical,
        description: description,
    }
}

const PageHelmets = {
    home: buildPageHelmet(
        'TEDxSFU 2022 is coming soon',
        'https://www.tedxsfu.com/',
        'TEDxSFU is an independently organized event organized by students and alumni volunteers at Simon Fraser University. Our goal is to bring people together to share a TED-like experience while promoting ideas worth spreading.',
    ),
    about: buildPageHelmet(
        'About TEDxSFU 2022',
        'https://www.tedxsfu.com/about',
        'This year, TEDxSFU challenges people who dare to reflect on their journeys and the issues surrounding the world. As we reflect deeply on our past choices, triumphs and struggles, these introspections can present opportunities to change the present and the future for good.',
    ),
    opportunity: buildPageHelmet(
        'Be a part of TEDxSFU',
        'https://www.tedxsfu.com/opportunity',
        'TEDxSFU is an independently organized event organized by students and alumni volunteers at Simon Fraser University. Join us and be a part of TEDxSFU Conference.',
    ),
    partner: buildPageHelmet(
        'Become partners for TEDxSFU 2022',
        'https://www.tedxsfu.com/partner',
        'Connect with your target audience through shared values and interests engagingly and thoughtfully. The TEDxSFU Conference is our signature event driven by ideas worth spreading. Every year over 300 people attend in support of our mission.'
    ),
    sponsors: buildPageHelmet(
        'Our Partners',
        'https://www.tedxsfu.com/sponsors',
        'We\'ve partnered with these amazing organizations and businesses to make TEDxSFU happen this year.'
    ),
    team: buildPageHelmet(
        'Meet The Team',
        'https://www.tedxsfu.com/team',
        'Behind the scenes, our amazing team that has been working tirelessly to bring you the TEDxSFU 2022 Conference! Meet our incredible OC team and get to learn a bit more about each of them!'
    ),
    speakers: buildPageHelmet(
        'TEDxSFU 2022 Speakers',
        'https://www.tedxsfu.com/',
        'TEDxSFU is an independently organized event organized by students and alumni volunteers at Simon Fraser University. Our goal is to bring people together to share a TED-like experience while promoting ideas worth spreading.',
    ),
    tickets: buildPageHelmet(
        'Get your tickets to TEDxSFU 2022 Conference',
        'https://www.tedxsfu.com/tickets',
        'Get your tickets to TEDxSFU 2022 Conference today!',
    ),
};

export default PageHelmets;