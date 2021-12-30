import { useState } from 'react';
import { InputForm } from './components/inputform.component';
import cx from 'classnames';
import { InputContext } from './contexts/input.context';

const App = () => {
    const [bill, setBill] = useState(0);
    // Set index to -1 to unselect all
    const [selectedItemIdx, setSelectedItemIdx] = useState(-1);
    const [selectedTip, setSelectedTip] = useState(0);
    const [customTip, setCustomTip] = useState(0);
    const [isCustomSelected, setSelectCustom] = useState(false);
    const [peopleNum, setPeopleNum] = useState(0);

    const inputContext = {
        bill, setBill,
        selectedItemIdx, setSelectedItemIdx,
        selectedTip, setSelectedTip,
        customTip, setCustomTip,
        isCustomSelected, setSelectCustom,
        peopleNum, setPeopleNum
    };

    const isResetable = bill !== 0 || selectedTip !== 0 || peopleNum !== 0;

    return (
        <main className="font-monospace">
            <InputContext.Provider value={inputContext}>
                <div className="relative flex flex-col items-center min-h-screen bg-light-grayish-cyan">
                    <img className="my-14 lg:my-20 lg:pt-20" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
                    <div className="flex flex-col lg:flex-row bg-white rounded-3xl p-8 w-full lg:w-2/3">
                        <div className="lg:pr-12 lg:pl-4 lg:w-1/2">
                            <InputForm />
                        </div>
                        <div className="flex flex-col justify-center bg-very-dark-cyan rounded-xl px-8 pt-12 mt-8 lg:mt-0 lg:w-1/2">
                            <div className="flex flex-row justify-between font-bold">
                                <div className="flex flex-col justify-center">
                                    <div className="text-light-grayish-cyan">
                                        Tip Amount
                                    </div>
                                    <div className="text-dark-grayish-cyan">
                                        / person
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="text-strong-cyan text-5xl my-auto">
                                        {(() => {
                                            let result = bill * (selectedTip / 100);
                                            result = peopleNum ? result / peopleNum : 0;
                                            return `$${result.toFixed(2)}`;
                                        })()}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between font-bold mt-10">
                                <div className="flex flex-col justify-center">
                                    <div className="text-light-grayish-cyan">
                                        Total
                                    </div>
                                    <div className="text-dark-grayish-cyan">
                                        / person
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="text-strong-cyan text-5xl my-auto">
                                        {(() => {
                                            let tip = bill * (selectedTip / 100);
                                            let result = bill + tip;
                                            result = peopleNum ? result / peopleNum : 0;
                                            return `$${result.toFixed(2)}`;
                                        })()}
                                    </div>
                                </div>
                            </div>
                            <div
                                className={cx(
                                    "w-full mt-10 lg:mt-auto mb-8 py-2 rounded",
                                    "font-bold text-xl",
                                    "bg-strong-cyan text-center text-very-dark-cyan",
                                    { "opacity-100 cursor-pointer active:bg-light-grayish-cyan": isResetable },
                                    { "opacity-20 cursor-default": !isResetable },
                                )}
                                onClick={() => {
                                    setBill(0);
                                    setSelectedTip(0);
                                    setPeopleNum(0);
                                    setSelectedItemIdx(-1);
                                    setCustomTip(0);
                                    setSelectCustom(false);
                                }}
                            >
                                RESET
                            </div>
                        </div>
                    </div>
                </div>
            </InputContext.Provider>
        </main>
    );
}

export default App;
