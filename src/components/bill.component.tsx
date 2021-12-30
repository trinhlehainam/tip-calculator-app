import { NumberInput } from "./numberinput.component"
import cx from "classnames"
import { ChangeEvent, useContext } from "react";
import { InputContext } from "../contexts/input.context";

export const Bill = () => {
    const { bill, setBill } = useContext(InputContext);
    const getBill = (event: ChangeEvent<HTMLInputElement>) => {
        const bill = Number(event.target.value);
        setBill && setBill(bill);
    };

    return (
        <>
            <div className="text-dark-grayish-cyan font-bold mb-2">Bill</div>
            <div className="relative flex items-center">
                <img
                    className="absolute my-auto ml-3"
                    src={`${process.env.PUBLIC_URL}/images/icon-dollar.svg`} alt="dollar icon" />
                <NumberInput
                    classname={cx(
                        "pr-3 py-1",
                        "text-bold text-2xl text-very-dark-cyan font-bold",
                    )}
                    value={(bill === 0) ? "" : bill?.toString()}
                    placeholder="0"
                    onChange={getBill}
                />
            </div>
        </>
    );
}
