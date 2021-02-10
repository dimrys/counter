import React from "react";

type PropsButtonType = {
    name: string
    settingValue: () => void
    value: number
    disabled: boolean
}

export function Button(props: PropsButtonType) {
    const onClickHandler = () => {
        props.settingValue()
    }

    return (
        <button disabled={props.disabled}
                className={props.disabled ? "stopButton" : "normalButton"}
                onClick={onClickHandler}>{props.name}</button>
    )
}