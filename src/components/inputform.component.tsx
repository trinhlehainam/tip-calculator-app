import { useState } from "react";

export const InputForm = () => {
    const [value, setValue] = useState("");
    return (
        <form>
            <div>Bill</div>
            <div className="relative flex items-center">
                <img
                    className="absolute my-auto mx-2"
                    src={`${process.env.PUBLIC_URL}/images/icon-dollar.svg`} alt="dollar icon" />
                <input
                    className="px-2 hover:cursor-pointer text-very-dark-cyan text-xl font-bold tracking-widest caret-strong-cyan text-right my-auto bg-gray-200 focus:outline-strong-cyan w-full"
                    type="number"
                    placeholder="0"
                />
            </div>
        </form>
    );
}
