import { Bill } from "./bill.component";
import { SelectTip } from './selecttip.component';
import { PeopleNumber } from './peoplenum.component';

export const InputForm = () => {
    return (
        <form>
            <Bill />
            <SelectTip />
            <PeopleNumber />
        </form>
    );
}
