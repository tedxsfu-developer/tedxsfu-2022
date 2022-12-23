import React from "react";
import Opportunities from "../../content/opportunities";
import DescriptionCell from "./DescriptionCell";

const OpportunityTable = () => {
    // const [isAllExpanded, setIsAllExpanded] = useState(false);
    //
    // const handleAllExpanded = () => {
    //     setIsAllExpanded(!isAllExpanded);
    // }

    return (
        <table id="opportunity-table">
            <thead>
            <tr id='header-row'>
                <th className="all-caps">Role</th>
                <th className="all-caps">Application Period</th>
                <th className='last-column'>
                    <p className="all-caps">Description</p>
                    {/*<button*/}
                    {/*    id='toggle-all-expand'*/}
                    {/*    onClick={handleAllExpanded}*/}
                    {/*    onKeyDown={handleAllExpanded}*/}
                    {/*    tabIndex={0}*/}
                    {/*>*/}
                    {/*    {isAllExpanded ? 'Collapse All' : 'Expand All'}*/}
                    {/*</button>*/}
                </th>
            </tr>
            </thead>
            <tbody>
            {Opportunities.map((opportunity) =>
                <tr key={opportunity.id}>
                    <td className='opportunity-role'>{opportunity.role}</td>
                    <td className='recruitment-period'>{opportunity.application_period}</td>
                    <td className='last-column'>
                        <DescriptionCell
                            opportunity={opportunity}
                            // isAllExpanded={isAllExpanded}
                        />
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
}

export default OpportunityTable;