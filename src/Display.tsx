import React from "react";

type PropsType = {
    value: number
    blockValue: number
    error: boolean
    editMode: boolean
}


export function Display(props: PropsType) {
    const classNameForDisplay = props.value === props.blockValue ? "stopValue" : "normal"
    return (
        <div className="wrapper-display">
            {
                props.error
                    ? <div className="stopValue">ERROR</div>
                    : props.editMode
                    ? <div className="stopValue">SETTING</div>
                    : <div className={classNameForDisplay}>{props.value}</div>
            }

        </div>
    )

}