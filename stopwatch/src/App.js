import React, { useState, useCallback } from 'react';
import './App.css';
import { Buttons } from './components/Buttons';
import { Display } from './components/Display';

class Observable {
  constructor(subscriptionFunk) {
    this.subscriptionFunk = subscriptionFunk
  }
  subscribe(observer){
    this.subscriptionFunk(observer)
  }
}

function App() {
  const [time, setTime] = useState({h:0, m:0, s:0})
  const [run, setRun] = useState(false)
  const [interv, setInterv] = useState(null)

  let updateH = time.h, updateM = time.m, updateS = time.s;

  const times = () => {
    console.log('times');
    if(updateS===59) {
      updateM++
      updateS=0
    }
    if(updateM===60){
      updateH++
      updateM=0
    }
    updateS++
    return setTime({h:updateH, m:updateM, s:updateS})
  }

  const start = () => {
    setRun(true)
    times()
    setInterv(setInterval(times, 1000))
  }
  const stop = () => {
    setRun(false)
    clearInterval(interv)
    setTime({h:0, m:0, s:0})
    
  }
  const wait = () => {
    setRun(false)
    clearInterval(interv)
  }
  const reset = useCallback(() => {
    console.log('setTime');
    clearInterval(interv)
    // setRun(false)
    setTime({h:0, m:0, s:0})
    //  setInterv(setInterval(times, 1000))
  })
  return (
    <div className="App">
      <Display time={time}/>
      <Buttons run={run} wait={wait} stop={stop} start={start} reset={reset} />
    </div>
  );
}

export default App;
