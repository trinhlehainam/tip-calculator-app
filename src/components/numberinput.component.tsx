import React from "react"
import cx from 'classnames'

type Props = {
    classname: string,
    placeholder: string
    value?: string
    onChange?: Function
    onClick?: Function
}

export const NumberInput: React.FC<Props> = ({ classname, placeholder, value, onChange, onClick }) => {
    return (
        <input
            className={cx(
                "rounded hover:cursor-pointer caret-strong-cyan text-right my-auto bg-gray-100 w-full",
                "outline-none outline-offset-0 focus:outline-strong-cyan hover:outline-strong-cyan",
                classname,
            )}
            type="number"
            value={value}
            placeholder={placeholder}
            onChange={(event) => onChange && onChange(event)}
            onClick={() => onClick && onClick()}
        />
    );
}
