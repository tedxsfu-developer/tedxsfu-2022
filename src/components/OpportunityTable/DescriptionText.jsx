import React from "react";
import dot from "../../images/dot.svg";
import SimpleTextLink from "../SimpleTextLink/SimpleTextLink";

const DescriptionText = ({ opportunity }) => {
    const description = opportunity.description;

    const shouldContactContent = (opportunity) => {
        const recruitedByContent = ["coach", "speaker", "mc"];
        return recruitedByContent.includes(opportunity);
    }

    const shouldContactEvent = (opportunity) => {
        const recruitedByEvent = ["energizer"];
        return recruitedByEvent.includes(opportunity);
    }

    const shouldContactEventAndInternal = (opportunity) => {
        const recruitedByEventAndInternal = ["ga"];
        return recruitedByEventAndInternal.includes(opportunity);
    }

    return (
        <>
            {description.overview &&
                <section className='description-section first-item'>
                    {description.overview && description.overview.title &&
                        <h2>{description.overview.title}</h2>}
                    {description.overview && description.overview.content &&
                        description.overview.content.split("\n").map((paragraph, index) => {
                            if (index === 0) {
                                return <p key={index} className='first-item'>{paragraph}</p>;
                            } else {
                                return <p key={index}>{paragraph}</p>;
                            }
                        })}
                    {description.overview && description.overview.recommendation &&
                        <p>{description.overview.recommendation}</p>}

                    {/*Specific to GA position*/}
                    {description.overview && description.overview.report_to &&
                        <div className='block-container margin-top'>
                            {description.overview.report_to.title &&
                                <h3 className='inline'>{`${description.overview.report_to.title}:`}</h3>
                            }
                            {description.overview.report_to.content &&
                                <p className='inline'>{`${description.overview.report_to.content}:`}</p>
                            }
                        </div>
                    }
                    {description.overview && description.overview.time_commitment &&
                        <div className='block-container'>
                            {description.overview.time_commitment.title &&
                                <h3 className='inline'>{`${description.overview.time_commitment.title}:`}</h3>
                            }
                            {description.overview.time_commitment.content &&
                                <p className='inline'>{`${description.overview.time_commitment.content}:`}</p>
                            }
                        </div>
                    }
                </section>
            }

            {description.responsibilities &&
                <section className='description-section'>
                    <h2>{description.responsibilities.title}</h2>
                    <ul>
                        {description.responsibilities.content.map((responsibility, index) =>
                            <li key={index}>
                                <img src={dot}
                                     alt='responsibility item'
                                     width="16"
                                     height="16"
                                     className="filter-white"
                                />
                                <span>{responsibility}</span>
                            </li>)}
                    </ul>
                </section>
            }

            {description.skills_and_experiences &&
                <section className='description-section'>
                    <h2>{description.skills_and_experiences.title}</h2>
                    <ul>
                        {description.skills_and_experiences.content.map((skill, index) =>
                            <li key={index}>
                                <img src={dot}
                                     alt='skill item'
                                     width="16"
                                     height="16"
                                     className="filter-white"
                                />
                                <span>{skill}</span>
                            </li>)}
                    </ul>
                </section>
            }

            {/*Specific to Speaker and Coach positions*/}
            {description.position_details &&
                <section className='description-section'>
                    {description.position_details.title &&
                        <h2>{description.position_details.title}</h2>}
                    {description.position_details && description.position_details.official_title &&
                        <div className='block-container margin-top'>
                            {description.position_details.official_title.title &&
                                <h3 className="inline">{`${description.position_details.official_title.title}:`}</h3>
                            }
                            {description.position_details.official_title.content &&
                                <p className="inline">{description.position_details.official_title.content}</p>
                            }
                        </div>
                    }
                    {description.position_details && description.position_details.duration &&
                        <div className='block-container'>
                            {description.position_details.duration.title &&
                                <h3 className="inline">{`${description.position_details.duration.title}:`}</h3>
                            }
                            {description.position_details.duration.content &&
                                <p className="inline">{description.position_details.duration.content}</p>
                            }
                        </div>
                    }
                    {description.position_details && description.position_details.type &&
                        <div className='block-container'>
                            {description.position_details.type.title &&
                                <h3 className="inline">{`${description.position_details.type.title}:`}</h3>
                            }
                            {description.position_details.type.content &&
                                <p className="inline">{description.position_details.type.content}</p>
                            }
                        </div>
                    }

                    {description.position_details && description.position_details.qualifications &&
                        <h3>{`${description.position_details.qualifications.title}:`}</h3>}
                    {description.position_details && description.position_details.qualifications &&
                        <ul>
                            {description.position_details.qualifications.content.map((qualification, index) =>
                                <li key={index}>
                                    <img src={dot}
                                         alt='qualification item'
                                         width="16"
                                         height="16"
                                         className="filter-white"
                                    />
                                    <span>{qualification}</span>
                                </li>)}
                        </ul>
                    }
                </section>
            }

            {description.main_duties &&
                <section className='description-section'>
                    {description.main_duties.title &&
                        <h2>{description.main_duties.title}</h2>}
                    {description.main_duties && description.main_duties.content &&
                        <ul>
                            {description.main_duties.content.map((duty, index) =>
                                <li key={index}>
                                    <img src={dot}
                                         alt='duty item'
                                         width="16"
                                         height="16"
                                         className="filter-white"
                                    />
                                    <span>{duty}</span>
                                </li>)}
                        </ul>
                    }
                </section>
            }

            {description.expectations &&
                <section className='description-section'>
                    {description.expectations.title &&
                        <h2>{description.expectations.title}</h2>}
                    {description.expectations && description.expectations.content &&
                        <ul>
                            {description.expectations.content.map((expectation, index) =>
                                <li key={index}>
                                    <img src={dot}
                                         alt='expectation item'
                                         width="16"
                                         height="16"
                                         className="filter-white"
                                    />
                                    <span>{expectation}</span>
                                </li>)}
                        </ul>
                    }
                </section>
            }

            {opportunity.id === 'speaker' &&
                <p className="guideline-info"><strong>Please note that if a talk does not follow
                    the <SimpleTextLink
                        link="https://pb-assets.tedcdn.com/system/baubles/files/000/008/468/original/tedx_content_guidelines_fact_check.pdf?1588684684"
                        isInternal={false}
                        shouldOpenInNewTab={true}
                    >TEDx Content Guidelines
                    </SimpleTextLink> or <SimpleTextLink
                        link="https://pb-assets.tedcdn.com/system/baubles/files/000/008/465/original/TEDx_Copyright_Guidelines_final.pdf?1588610363"
                        isInternal={false}
                        shouldOpenInNewTab={true}
                    >Copyright Guidelines</SimpleTextLink>, TEDxSFU has the discretion to withhold the talk.
                </strong></p>
            }

            {description.covid_notes &&
                <section className='description-section'>
                    {description.covid_notes.title &&
                        <h2>{description.covid_notes.title}</h2>}
                    {description.covid_notes && description.covid_notes.content &&
                        <>
                            {description.covid_notes.content.split("\n").map((paragraph, index) => {
                                if (index === 0) {
                                    return <p key={index} className='first-item'>{paragraph}</p>;
                                } else {
                                    return <p key={index}>{paragraph}</p>;
                                }
                            })}
                        </>
                    }
                </section>
            }

            {description.timeline &&
                <section className='description-section'>
                    {description.timeline.title &&
                        <h2>{description.timeline.title}</h2>}
                    {description.timeline && description.timeline.content &&
                        <ol>
                            {description.timeline.content.map((timelineItem, index) =>
                                <li key={index}>
                                    <span className="bold">{`${timelineItem.datetime}: `}</span>
                                    <span>{timelineItem.activity}</span>
                                </li>
                            )}
                        </ol>
                    }
                </section>
            }

            {shouldContactEventAndInternal(opportunity.id) &&
                <p className="contact-info">
                    If you have any questions, please contact <em>Director of Events</em> (
                    <SimpleTextLink
                        link="mailto:events@tedxsfu.com"
                        isInternal={false}
                        shouldOpenInNewTab={false}
                    >
                        events@tedxsfu.com
                    </SimpleTextLink>) or <em>Director of Internal Relations</em> (
                    <SimpleTextLink
                        link="mailto:internal@tedxsfu.com"
                        isInternal={false}
                        shouldOpenInNewTab={false}
                    >
                        internal@tedxsfu.com
                    </SimpleTextLink>
                    )
                </p>
            }

            {shouldContactEvent(opportunity.id) &&
                <p className="contact-info">
                    If you have any questions, please contact <em>Director of Events</em> (
                    <SimpleTextLink
                        link="mailto:events@tedxsfu.com"
                        isInternal={false}
                        shouldOpenInNewTab={false}
                    >
                        events@tedxsfu.com
                    </SimpleTextLink>)
                </p>
            }

            {shouldContactContent(opportunity.id) &&
                <p className="contact-info">
                    Have any questions about the application or opportunity? Send <em>TEDxSFU's Content
                    Development team</em> an email at <SimpleTextLink
                    link="mailto:content@tedxsfu.com"
                    isInternal={false}
                    shouldOpenInNewTab={false}
                >
                    content@tedxsfu.com
                </SimpleTextLink> and CC <SimpleTextLink
                    link="mailto:talhab@sfu.ca"
                    isInternal={false}
                    shouldOpenInNewTab={false}
                >
                    talhab@sfu.ca
                </SimpleTextLink>
                </p>
            }
        </>
    );
}

export default DescriptionText;