import React, { useEffect, useState} from "react";
import './stopwatch.css';

const Stopwatch = () => {

const [seconds, setSeconds] = useState(0);
const [minutes, setMinutes] = useState(0);
const [stopwatch, setStopwatch] = useState(false)


const time = ()=>{
    const newSeconds = seconds + 1;
    if (newSeconds >= 60){
        const newMinutes = minutes +1;
        setMinutes(newMinutes);
        setSeconds(0);
    }else{
        setSeconds(newSeconds);
    }
};

useEffect(()=>{
    if (stopwatch){
        const interval = setInterval(time, 1000);
        return()=> clearInterval(interval);
    }
})

const start = ()=>{
    setStopwatch(true); 
}

const stop = ()=>{ 
    setStopwatch(false);

}

const restart = ()=>{
    setMinutes(0);
    setSeconds(0);
    setStopwatch(true);
}

    return(
        <div className="container">
            <h1>Stopwatch</h1>
            <h1>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
            <div className="buttons">
                <button className="start" onClick={start}>start</button>
                <button className="stop" onClick={stop}>stop</button>
                <button className="restart" onClick={restart}>restart</button>
            </div>
        </div>
    )
}

export default Stopwatch;