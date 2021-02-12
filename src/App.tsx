import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Button} from "./Button";


function App() {
    let [value, setValue] = useState<number>(0)

    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)

    const incValue = () => {
        setValue(value + 1)
    }
    const resetValue = () => {
        setValue(minValue)
    }

    const handlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.valueAsNumber)

    }
    const handlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)

    }

    const handlerSettings = () => {
        setValue(minValue)
    }


    return (
        <div>
            <Counter value={value}
                     maxValueDisabled={maxValue}
                     minValueDisabled={minValue}
                     incValue={incValue}
                     resetValue={resetValue}
                // handlerSettings = {handlerSettings}
            />

            <SettingCounter
                maxValue={maxValue}
                minValue={minValue}
                handlerMax={handlerMax}
                handlerMin={handlerMin}
                handlerSettings={handlerSettings}

            />

        </div>
    );
}

export default App;

type SettingCounterPropsType = {
    handlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    handlerMin: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    minValue: number
    handlerSettings: () => void
}

function SettingCounter(props: SettingCounterPropsType) {
    return (
        <div className="App">
            <div>
                <span>Max</span>
                <input type="number" onChange={props.handlerMax} value={props.maxValue}/>
            </div>
            <div>
                <span>Min</span>
                <input type="number" onChange={props.handlerMin} value={props.minValue}/>
            </div>
            <Button name={"set"}
                    disabled={false}
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


