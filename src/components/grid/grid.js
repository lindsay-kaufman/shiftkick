import { Shifts } from "../shifts/shifts";
import './grid.scss';

export const Grid = (shiftNumber) => {
    return (
        <div className={`grid shift-${shiftNumber.shiftNumber}`}>
            <Shifts shiftNumber={shiftNumber.shiftNumber} />
        </div>
    );
}
