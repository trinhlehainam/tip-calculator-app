import React from 'react';
import { InputForm } from './components/inputform.component';

function App() {
    return (
        <main className="font-SpaceMono">
            <div className="flex flex-col justify-center items-center min-h-screen bg-light-grayish-cyan">
                <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
                <div className="flex flex-col lg:flex-row bg-white rounded-xl p-8 w-full lg:w-2/3">
                    <div className="lg:w-1/2">
                        <InputForm />
                    </div>
                    <div className="flex flex-col justify-center bg-very-dark-cyan rounded-xl p-4 lg:w-1/2">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col items-center">
                                <div className="text-light-grayish-cyan">
                                    Tip Amount
                                </div>
                                <div className="text-dark-grayish-cyan">
                                    / person
                                </div>
                            </div>
                            <div className="text-strong-cyan text-4xl font-bold my-auto">
                                $4.27
                            </div>
                        </div>
                        <div className="w-full my-auto text-center bg-dark-grayish-cyan rounded content-end">
                            Reset
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
