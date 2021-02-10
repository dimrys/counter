import {Display} from "./Display";
import {Button} from "./Button";
import React from "react";

type CounterPropsType = {
    value: number
    maxValueDisabled: number
    minValueDisabled: number
    incValue: () => void
    resetValue: () => void

}

export function Counter(props: CounterPropsType) {
    return (
        <div>
            <Display value={props.value} blockValue={props.maxValueDisabled}/>
            <div className="wrapper">
                <Button name={"inc"}
                        disabled={props.value === props.maxValueDisabled ? true : false}
                        settingValue={props.incValue}
                />
                <Button name={"res"}
                        disabled={props.value === props.minValueDisabled ? true : false}
                        settingValue={props.resetValue}
                />
            </div>
        </div>
    )
}