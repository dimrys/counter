import React from "react";

type PropsType = {
    value: number
    incValue: () => void
}

export function IncButton(props: PropsType) {
    const onClickIncValue = () => {props.incValue()}
    const maxValue = props.value === 5
    return (
        <button disabled={maxValue} className={maxValue ? "stopButton": "normalButton"} onClick={onClickIncValue}>inc</button>
    )
}