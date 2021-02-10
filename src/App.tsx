import React, {useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Button} from "./Button";


function App() {
    let [value, setValue] = useState<number>(0)

    const incValue = () => {
        setValue(value + 1)
    }

    const resetValue = () => {
        setValue(0)
    }

    const maxValueDisabled = 10
    const minValueDisabled = 0


    return (
        <div className="App">
            <Display value={value} blockValue={maxValueDisabled}/>
            <div className= "wrapper">

                <Button name={"inc"}
                        disabled={value === maxValueDisabled ? true: false}
                        settingValue={incValue}
                        value={value}/>
                <Button name={"res"}
                        disabled={value === minValueDisabled ? true: false}
                        settingValue={resetValue}
                        value={value}/>

            </div>
        </div>
    );
}

export default App;


