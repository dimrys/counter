import React from "react";

type PropsType = {
    value: number
    blockValue:number
}


export function Display(props: PropsType) {
    return (
        <div className="wrapper-display">
            <div className={props.value ===props.blockValue ? "stopValue": "normal"}>{props.value}</div>
        </div>
    )

}