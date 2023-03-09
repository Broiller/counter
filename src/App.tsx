import React, {useReducer} from 'react';
import './App.css';
import {CounterDisplay} from "./components/Counter-Display";
import {CounterButtons} from "./components/Counter-Buttons";

const counterReducer = (count: number, action: any): number => {
    switch (action.type) {
        case "Inc":
            return count + 1
        case "Res":
            return 0
        default:
            return count
    }
}
const IncAC = () => ({type: "Inc"})
const ResAC = () => ({type: "Res"})

function App() {

    const [count, dispatch] = useReducer(counterReducer, 0)
    const maxCount = 5;


    return (
        <div className="App">
            <CounterDisplay count={count} />
            <CounterButtons title="Inc" disabled={count === maxCount} maxCount={maxCount} count={count} onClick={()=>dispatch(IncAC())}/>
            <CounterButtons title="Res" disabled={count === 0} maxCount={maxCount} count={count} onClick={()=>dispatch(ResAC())}/>
        </div>
    );
}


export default App;

