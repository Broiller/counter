import React from "react";

type CounterButtonsPropsType = {
    value: number
    maxValue: number
    incValue: () => void
    resetValue: () => void
}


export const CounterButtons = (props: CounterButtonsPropsType) => {


    return (
        <div>
            <button disabled={props.value === props.maxValue} onClick={props.incValue}>inc</button>
            <button disabled={props.value === 0} onClick={props.resetValue}>reset</button>
        </div>
    )
}