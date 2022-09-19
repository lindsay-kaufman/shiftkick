import { useState } from "react";
import { Grid } from "../grid/grid";
import './wrapper.scss';

export const Wrapper = () => {
    const shifts = new Array(4)
    const [activeShift, setActiveShift] = useState(0)

    const renderShiftList = () => {
       for (let i = 0; i < shifts.length; i++) {
           return (
               <button
                   key={i}
                   onClick={() => setActiveShift(i)}
               >
                   {`Shift ${i}`}
               </button>
           )
       }
    }

    return (
        <div className="wrapper">
            <div className="grid-wrapper">
                <aside className="shifts">
                    {renderShiftList()}
                </aside>
                <Grid shiftNumber={activeShift}/>
            </div>

        </div>
    );
}