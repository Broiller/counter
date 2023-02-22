import React from "react";

type CounterDisplayPropsType = {
    value: number
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {

    return (
        <div className={props.value === 5 ? "error" : ""}>
            {props.value}
        </div>
    )
}