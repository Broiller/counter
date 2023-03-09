import React, {MouseEventHandler} from "react";

type CounterButtonsPropsType = {
    count: number
    maxCount: number
    onClick: MouseEventHandler<HTMLButtonElement>
    title: string
    disabled: boolean
}


export const CounterButtons = (props: CounterButtonsPropsType) => {


    return (
        <div>
            <button disabled={props.disabled} onClick={props.onClick}>{props.title}</button>
            {/*<button disabled={props.count === 0} onClick={props.onClick}>{props.title}</button>*/}
        </div>
    )
}