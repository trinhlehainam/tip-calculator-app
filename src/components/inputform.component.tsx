import { useState } from "react";

export const InputForm = () => {
    const [value, setValue] = useState("");
    const tips = [5, 10, 15, 25, 50];

    return (
        <form>
            <div>Bill</div>
            <div className="relative flex items-center">
                <img
                    className="absolute my-auto mx-2"
                    src={`${process.env.PUBLIC_URL}/images/icon-dollar.svg`} alt="dollar icon" />
                <input
                    className="px-2 rounded outline-none outline-offset-0 focus:outline-strong-cyan hover:outline-strong-cyan hover:cursor-pointer text-very-dark-cyan text-xl font-bold tracking-widest caret-strong-cyan text-right my-auto bg-gray-100 w-full"
                    type="number"
                    placeholder="0"
                />
            </div>
            <div>Select tip %</div>
            <div className="flex flex-row flex-wrap gap-3 font-bold text-3xl">
                {tips.map((value) => (
                    <div className="mt-2 p-2 mx-auto my-auto flex-[1_1_40%] lg:flex-[1_1_30%] bg-very-dark-cyan text-lighter-grayish-cyan rounded text-center">{`${value}%`}</div>
                ))}
                <input
                    className="flex-[1_1_40%] lg:flex-[1_1_30%] px-2 mt-2 mx-auto my-auto w-full rounded hover:cursor-pointer text-very-dark-cyan font-bold tracking-widest caret-strong-cyan text-right bg-gray-100 focus:outline-strong-cyan"
                    type="number"
                    placeholder="Custom"
                />
            </div>
            <div>Number of People</div>
            <div className="relative flex items-center">
                <img
                    className="absolute my-auto mx-2"
                    src={`${process.env.PUBLIC_URL}/images/icon-person.svg`} alt="person icon" />
                <input
                    className="px-2 rounded hover:cursor-pointer text-very-dark-cyan text-xl font-bold tracking-widest caret-strong-cyan text-right my-auto bg-gray-100 focus:outline-strong-cyan w-full"
                    type="number"
                    placeholder="0"
                />
            </div>
        </form>
    );
}
