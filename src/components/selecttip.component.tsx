import { NumberInput } from "./numberinput.component"
import cx from "classnames"
import { ChangeEvent, useContext } from "react";
import { InputContext } from "../contexts/input.context";

export const SelectTip = () => {
    const SELECTABLE_TIPS = [5, 10, 15, 25, 50];

    const {
        setSelectedTip,
        selectedItemIdx, setSelectedItemIdx,
        customTip, setCustomTip,
        isCustomSelected, setSelectCustom,
    } = useContext(InputContext);

    const getCustomTip = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setCustomTip && setCustomTip(value);
        setSelectedTip && setSelectedTip(value);
    }

    return (
        <>
            <div className="text-dark-grayish-cyan font-bold mt-8">Select tip %</div>
            <div className="flex flex-row flex-wrap gap-3 font-bold text-2xl">
                {SELECTABLE_TIPS.map((value, idx) => {
                    const isSelected = selectedItemIdx == idx && !isCustomSelected;
                    return (
                        <div
                            key={`${idx}-${value}`}
                            className={cx(
                                "mt-2 p-2 mx-auto my-auto flex-[1_1_40%] lg:flex-[1_1_30%] rounded text-center",
                                "active:bg-light-grayish-cyan active:text-very-dark-cyan cursor-pointer",
                                { "bg-very-dark-cyan text-lighter-grayish-cyan": !isSelected },
                                { "bg-strong-cyan text-very-dark-cyan": isSelected }
                            )}
                            onClick={() => {
                                setSelectCustom && setSelectCustom(false);
                                setSelectedItemIdx && setSelectedItemIdx(idx)
                                setSelectedTip && setSelectedTip(value);
                            }}
                        >
                            {`${value}%`}
                        </div>
                    )
                })}
                <NumberInput
                    classname={cx(
                        "text-bold text-very-dark-cyan placeholder-darker-grayish-cyan font-bold text-right",
                        "flex-[1_1_40%] lg:flex-[1_1_30%] mt-2 p-2 my-auto",
                    )}
                    placeholder="Custom"
                    value={customTip === 0 ? "" : customTip?.toString()}
                    onClick={() => {
                        setSelectCustom && setSelectCustom(true);
                        setSelectedTip && customTip && setSelectedTip(customTip);
                    }}
                    onChange={getCustomTip}
                />
            </div>
        </>
    );
}
