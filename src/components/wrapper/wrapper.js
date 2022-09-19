import { useState } from "react";
import { Shifts } from "../shifts/shifts";

import './wrapper.scss';

export const Wrapper = () => {
    let shifts = [<Shifts shiftNumber={0} />, <Shifts shiftNumber={1} /> ]
    const [activeShift, setActiveShift] = useState(0)

    const renderShifts = () => {
       for (let i = 0; i < shifts.length; i++) {
           return (
               <button
                   key={i}
                   onClick={() => setActiveShift(i)}
                   className="render-button"
               >
                   {`Shift ${i}`}
               </button>
           )
       }
    }

    const addShift = () => {
        shifts.push(<Shifts shiftNumber={shifts.length}/>)
    }

    return (
        <div className="wrapper">
            <div className="grid-wrapper">
                <aside className="shifts">
                    {renderShifts()}
                    <button className="add-shift-button" onClick={addShift}>+</button>
                </aside>
                <Shifts shiftNumber={activeShift} />
            </div>

        </div>
    );
}