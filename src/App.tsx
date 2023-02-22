import React, {useState} from 'react';
import './App.css';
import {CounterDisplay} from "./components/Counter-Display";
import {CounterButtons} from "./components/Counter-Buttons";

function App() {
    const [value, setValue] = useState<number>(0)
    const maxValue = 5;

    const incValue = () => {
        setValue(value+1)
    }
    const resetValue = () => {
        setValue(0)
    }

    return (
        <div className="App">
            <CounterDisplay value={value} />
            <CounterButtons maxValue={maxValue} value={value} incValue={incValue} resetValue={resetValue}/>
        </div>
    );
}


export default App;

