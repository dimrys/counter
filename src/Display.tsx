import React from "react";

type PropsType = {
    value: number
}


export function Display(props: PropsType) {
    return (
        <div className="wrapper-display">
            <div className={props.value === 5 ? "stopValue": "normal"}>{props.value}</div>
        </div>

    )

}