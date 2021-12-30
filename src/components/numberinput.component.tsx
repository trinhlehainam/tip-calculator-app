import React from "react"
import cx from 'classnames'

type Props = {
    classname: string,
    placeholder: string
}

export const NumberInput: React.FC<Props> = ({ classname, placeholder }) => {
    return (
        <input
            className={cx(
                classname,
                "rounded hover:cursor-pointer caret-strong-cyan text-right my-auto bg-gray-100 w-full",
                "outline-none outline-offset-0 focus:outline-strong-cyan hover:outline-strong-cyan",
            )}
            type="number"
            placeholder={placeholder}
        />
    );
}
