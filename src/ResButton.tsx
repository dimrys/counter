import React from "react";

type PropsType = {
    value: number
    resetValue: () => void
}

export function ResButton(props: PropsType) {
    const minValue = props.value === 0
    const onClickResValue = () => {props.resetValue()}
    return (
        <button disabled={minValue} className={minValue ? "stopButton": "normalButton"} onClick={onClickResValue}>reset</button>
    )
}