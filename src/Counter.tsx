import {Display} from "./Display";
import {Button} from "./Button";
import React from "react";

type CounterPropsType = {
    error: boolean
    editMode: boolean
    value: number
    maxValueDisabled: number
    minValueDisabled: number
    incValue: () => void
    resetValue: () => void
    handlerSettings?: () => void

}

export function Counter(props: CounterPropsType) {
    const disabledForButtonInc = (props.error || props.editMode)
        ? true
        : props.value === props.maxValueDisabled

    const disabledForButtonRes = (props.error || props.editMode)
        ? true
        : props.value === props.minValueDisabled

    return (
        <div className="App">
            <Display value={props.value}
                     blockValue={props.maxValueDisabled}
                     error={props.error}
                     editMode={props.editMode}
            />
            <div className="wrapper">
                <Button name={"inc"}
                        disabled={disabledForButtonInc}
                        settingValue={props.incValue}
                />
                <Button name={"res"}
                        disabled={disabledForButtonRes}
                        settingValue={props.resetValue}
                />

            </div>
        </div>
    )
}