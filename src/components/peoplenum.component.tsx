import { NumberInput } from "./numberinput.component"
import cx from "classnames"

export const PeopleNumber = () => {
    return (
        <>
            <div className="text-dark-grayish-cyan font-bold mt-8 mb-2">Number of People</div>
            <div className="relative flex items-center">
                <img
                    className="absolute mb-1 ml-3"
                    src={`${process.env.PUBLIC_URL}/images/icon-person.svg`} alt="person icon" />
                <NumberInput
                    classname={cx(
                        "pr-3 py-1 mb-2",
                        "text-bold text-2xl text-very-dark-cyan font-bold",
                        "flex-[1_1_40%] lg:flex-[1_1_30%]"
                    )}
                    placeholder="0"
                />
            </div>
        </>
    )
}
