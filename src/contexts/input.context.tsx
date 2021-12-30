import { Dispatch, SetStateAction, createContext } from "react";

type Props = {
    bill: number,
    setBill: Dispatch<SetStateAction<number>>,
    selectedItemIdx: number,
    setSelectedItemIdx: Dispatch<SetStateAction<number>>,
    selectedTip: number,
    setSelectedTip: Dispatch<SetStateAction<number>>,
    customTip: number,
    setCustomTip: Dispatch<SetStateAction<number>>,
    isCustomSelected: boolean,
    setSelectCustom: Dispatch<SetStateAction<boolean>>,
    peopleNum: number,
    setPeopleNum: Dispatch<SetStateAction<number>>,
};

const InputContext = createContext<Partial<Props>>({});

export { InputContext };
