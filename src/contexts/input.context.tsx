import { Dispatch, SetStateAction, createContext } from "react";

type Props = {
    bill: number,
    setBill: Dispatch<SetStateAction<number>>,
    selectedItemIdx: number,
    setSelectedItemIdx: Dispatch<SetStateAction<number>>,
    tips: number,
    setTips: Dispatch<SetStateAction<number>>,
    people: number,
    setPeople: Dispatch<SetStateAction<number>>,
};

const InputContext = createContext<Partial<Props>>({});

export {InputContext};
