import React from "react";

type CounterDisplayPropsType = {
    count: number
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {

    return (
        <div className={props.count === 5 ? "error" : ""}>
            {props.count}
        </div>
    )
}