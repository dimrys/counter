import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Button} from "./Button";


function App() {


    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [value, setValue] = useState(startValue)
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
                // handlerSettings = {handlerSettings}
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

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.handlerMax(e.currentTarget.valueAsNumber)
    }

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        props.handlerMin(e.currentTarget.valueAsNumber)
    }
    const disabledButtonSet = props.error ? true : props.editMode ? !props.editMode : true


    return (
        <div className="App">
            <div>
                <span>Max</span>
                <input type="number" onChange={onChangeHandlerMax} value={props.maxValue}/>
            </div>
            <div>
                <span>Min</span>
                <input type="number" onChange={onChangeHandlerStart} value={props.minValue}/>
            </div>
            <Button name={"set"}
                    disabled={disabledButtonSet}
                    settingValue={props.handlerSettings}
            />
        </div>

    )
}


// function TestLocal() {
//     const [value1, setValue1] = useState(0)
//
//     useEffect(() => {
//         let valueAsString = localStorage.getItem('counterValue')
//         if(valueAsString) {
//             setValue1(JSON.parse(valueAsString))
//         }
//     }, [])
//
//
//
//     useEffect(() => {
//         localStorage.setItem('counterValue', JSON.stringify(value1))
//     },[value1])
//
//
//
//
//     const incHandler = () => {
//         setValue1(value1 + 1 )
//     }
//
//     return(
//         <div>
//             <div>{value1}</div>
//             <button onClick={incHandler}>inc</button>
//
//         </div>
//     )
//
// }


