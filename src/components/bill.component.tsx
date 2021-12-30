import { NumberInput } from "./numberinput.component"
import cx from "classnames"

export const Bill = () => {
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
                    placeholder="0"
                />
            </div>
        </>
    );
}
