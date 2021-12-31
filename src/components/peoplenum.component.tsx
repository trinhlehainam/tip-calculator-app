import { NumberInput } from "./numberinput.component"
import cx from "classnames"
import { ChangeEvent, useContext } from "react"
import { InputContext } from "../contexts/input.context"

export const PeopleNumber = () => {
    const {
        bill, selectedTip,
        peopleNum, setPeopleNum,
    } = useContext(InputContext);

    const getPeopleNumFromInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPeopleNum && setPeopleNum(Number(event.target.value));
    };

    const isError = (bill !== 0 || selectedTip !== 0) && peopleNum === 0;

    return (
        <>
            <div className="flex flex-row justify-between font-bold mt-8 mb-2 lg:mt-12">
                <div className="text-dark-grayish-cyan">
                    Number of People
                </div>
                <div className={cx(
                    "text-orange-500 text-right",
                    { "hidden": !isError },
                    { "block": isError }
                )}>
                    Can't be zero
                </div>
            </div>
            <div className="relative flex items-center">
                <img
                    className="absolute mb-1 ml-3"
                    src={`${process.env.PUBLIC_URL}/images/icon-person.svg`} alt="person icon" />
                <NumberInput
                    classname={cx(
                        "pr-3 py-1 mb-2",
                        "text-bold text-2xl text-very-dark-cyan font-bold",
                        "flex-[1_1_40%] lg:flex-[1_1_30%]",
                        { "outline-orange-500 hover:outline-orange-500 focus:outline-orange-500": isError }
                    )}
                    placeholder="0"
                    value={peopleNum === 0 ? "" : peopleNum?.toString()}
                    onChange={getPeopleNumFromInput}
                />
            </div>
        </>
    )
}
