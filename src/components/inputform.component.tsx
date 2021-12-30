import { useState } from "react";
import cx from 'classnames'

export const InputForm = () => {
    const [value, setValue] = useState("");
    const tips = [5, 10, 15, 25, 50];

    return (
        <form>
            <div className="text-dark-grayish-cyan font-bold mb-2">Bill</div>
            <div className="relative flex items-center">
                <img
                    className="absolute my-auto ml-3"
                    src={`${process.env.PUBLIC_URL}/images/icon-dollar.svg`} alt="dollar icon" />
                <input
                    className={cx(
                        "pr-3 py-1 rounded  hover:cursor-pointer caret-strong-cyan text-right my-auto bg-gray-100 w-full",
                        "outline-none outline-offset-0 focus:outline-strong-cyan hover:outline-strong-cyan",
                        "text-bold text-2xl text-very-dark-cyan font-bold"
                    )}
                    type="number"
                    placeholder="0"
                />
            </div>
            <div className="text-dark-grayish-cyan font-bold mt-8">Select tip %</div>
            <div className="flex flex-row flex-wrap gap-3 font-bold text-2xl">
                {tips.map((value) => (
                    <div className="mt-2 p-2 mx-auto my-auto flex-[1_1_40%] lg:flex-[1_1_30%] bg-very-dark-cyan text-lighter-grayish-cyan rounded text-center">
                    {`${value}%`}
                    </div>
                ))}
                <input
                    className={cx(
                        "rounded hover:cursor-pointer caret-strong-cyan bg-lighter-grayish-cyan w-full",
                        "outline-none outline-offset-0 focus:outline-strong-cyan hover:outline-strong-cyan",
                        "text-bold text-very-dark-cyan placeholder-darker-grayish-cyan font-bold text-right",
                        "flex-[1_1_40%] lg:flex-[1_1_30%] mt-2 p-2 my-auto"
                    )}
                    type="number"
                    placeholder="Custom"
                />
            </div>
            <div className="text-dark-grayish-cyan font-bold mt-8 mb-2">Number of People</div>
            <div className="relative flex items-center">
                <img
                    className="absolute my-auto ml-3"
                    src={`${process.env.PUBLIC_URL}/images/icon-person.svg`} alt="person icon" />
                <input
                    className={cx(
                        "pr-3 py-1 mb-2 rounded  hover:cursor-pointer caret-strong-cyan text-right my-auto bg-gray-100 w-full",
                        "outline-none outline-offset-0 focus:outline-strong-cyan hover:outline-strong-cyan",
                        "text-bold text-2xl text-very-dark-cyan font-bold",
                        "flex-[1_1_40%] lg:flex-[1_1_30%]"
                    )}
                    type="number"
                    placeholder="0"
                />
            </div>
        </form>
    );
}
