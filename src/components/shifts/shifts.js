import './shifts.scss'

const Line = ({val, key}) => (
    <tr key={key}>
        <td>
            {val.line}
        </td>
        <td>
            <input
                type="text"
                placeholder={val.issue}
                defaultValue={val.issue}
            />
        </td>
        <td>
            <input
                type="text"
                placeholder={val.actionTaken}
                defaultValue={val.actionTaken}
            />
        </td>
        <td>
            <input
                type="text"
                placeholder={val.followUpItems}
                defaultValue={val.followUpItems}
            />
        </td>
    </tr>
)



export const Shifts = ({shiftNumber}) => {
    let data = [
        {line: 0, issue: "Case fell", actionTaken: "Picked up case", followUpItems: "Scan case"},
        {line: 1, issue: "Injury", actionTaken: "Put a bandage on it", followUpItems: "None"},
        {line: 2, issue: "Cans spilled", actionTaken: "Mopped", followUpItems: "Inventory"},
    ]



    const addNewLine = () => {
        data.push({
            line: data.length,
            issue: " ",
            actionTaken: " ",
            followUpItems: " ",
        })
    }


    return (
        <div className="shift" key={shiftNumber}>
            <table>
                <tbody>
                <tr className="headers">
                    <th>Line</th>
                    <th>Issue</th>
                    <th>Action Taken</th>
                    <th>Follow Up Items</th>
                </tr>
                {data && data.map((val, key) => {
                    return (
                            <Line val={val} key={key}/>
                    )
                })}
                <tr>
                    <button className="add-line-button" onClick={addNewLine}>+ New Line Item</button>
                </tr>
                </tbody>
            </table>
        </div>
    );
};