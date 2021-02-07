import React, {useState} from 'react';
import './App.css';
import {Display} from "./Display";
import { IncButton } from './IncButton';
import { ResButton } from './ResButton';


function App() {
    let [value, setValue] = useState<number>(0)

    const incValue = () => {
        setValue(value + 1)
    }

    const resetValue = () => {
        setValue(0)
    }

    return (
        <div className="App">
            <Display value={value}/>
            <div className= "wrapper">
                <IncButton value = {value}
                           incValue = {incValue}/>
                <ResButton value = {value}
                           resetValue = {resetValue}/>
            </div>
        </div>
    );
}

export default App;
