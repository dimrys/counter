import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Button} from "./Button";


function App() {


    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [value, setValue] = useState(startValue)
    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if(startValueAsString) {
            setStartValue(JSON.parse(startValueAsString))
            setValue(JSON.parse(startValueAsString))
        }
    }, [])

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if(maxValueAsString) {
            setMaxValue(JSON.parse(maxValueAsString))
        }
    }, [])







    const [editMode, setEditMode] = useState(false)
    const [error, setError] = useState(false)

    const incValue = () => {
        setValue(value + 1)
    }
    const resetValue = () => {
        setValue(startValue)
    }

    const handlerMin = (startValue: number) => {
        if (startValue < 0 || startValue >= maxValue) {
            setError(true)
            setStartValue(startValue)
        } else {
            setStartValue(startValue)
            setEditMode(true)
            setError(false)
        }


    }
    const handlerMax = (maxValue: number) => {
        if (maxValue <= startValue) {
            setError(true)
            setMaxValue(maxValue)
        } else {
            setMaxValue(maxValue)
            setEditMode(true)
            setError(false)
        }

    }

    const handlerSettings = () => {
        setValue(startValue)
        setEditMode(false)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))

    }


    return (
        <div>
            <Counter error={error}
                     editMode={editMode}
                     value={value}
                     maxValueDisabled={maxValue}
                     minValueDisabled={startValue}
                     incValue={incValue}
                     resetValue={resetValue}

            />

            <SettingCounter error={error}
                            editMode={editMode}
                            maxValue={maxValue}
                            minValue={startValue}
                            handlerMax={handlerMax}
                            handlerMin={handlerMin}
                            handlerSettings={handlerSettings}

            />

        </div>
    );
}

export default App;

type SettingCounterPropsType = {
    error: boolean
    editMode: boolean
    handlerMax: (maxValue: number) => void
    handlerMin: (startValue: number) => void
    maxValue: number
    minValue: number
    handlerSettings: () => void
}

function SettingCounter(props: SettingCounterPropsType) {
    const [minError, setMinError] = useState(false)
    const [maxError, setMaxError] = useState(false)

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = e.currentTarget.valueAsNumber
        props.handlerMax(maxValue)
        if(maxValue <= props.minValue) {
            setMinError(true)
            setMaxError(true)
        } else {
            setMinError(false)
            setMaxError(false)
        }

    }

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        const startValue = e.currentTarget.valueAsNumber
        props.handlerMin(startValue)
        if(startValue < 0) {
            setMinError(true)
        } else if (startValue >= props.maxValue) {
            setMinError(true)
            setMaxError(true)
        } else {
            setMinError(false)
            setMaxError(false)
        }

    }
    const disabledButtonSet = props.error ? true : props.editMode ? !props.editMode : true

    const classNameForMin = minError ? "input_error" : ""
    const classNameForMax = maxError ? "input_error" : ""

    return (
        <div className="App">
            <div>
                <span>Max</span>
                <input type="number"
                       className={classNameForMax}
                       onChange={onChangeHandlerMax}
                       value={props.maxValue}/>
            </div>
            <div>
                <span>Min</span>
                <input type="number"
                       className={classNameForMin}
                       onChange={onChangeHandlerStart}
                       value={props.minValue}/>
            </div>
            <Button name={"set"}
                    disabled={disabledButtonSet}
                    settingValue={props.handlerSettings}
            />
        </div>

    )
}




