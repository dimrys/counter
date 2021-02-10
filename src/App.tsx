import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


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
            <Counter value={value}
                     maxValueDisabled={maxValueDisabled}
                     minValueDisabled={minValueDisabled}
                     incValue={incValue}
                     resetValue={resetValue}/>
        </div>
    );
}

export default App;


