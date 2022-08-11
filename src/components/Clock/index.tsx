import React, { useEffect, useState } from 'react'
import './styles.css'


const currentDate: Date = new Date()
const Clock: React.FC = () =>  {
   
    const [date,setDate] = useState<Date>(currentDate);

    
    //derived state, rotate max is 360deg max hour in clock is 12, 12 * 30 = 360, minutes max is 60, 60 * 6 = 360, same with seconds
    const hour: number = (date.getHours() +1 ) * 30;
    const minute: number = date.getMinutes() * 6;
    const second: number = date.getSeconds() * 6;
    

    useEffect(() => {
        //to avoid setState maximum 
        setTimeout(() => {
            setDate(new Date())
        }, 1000)
    }, [date])

    const applyTransformRotate = (value: number) => {
        return `rotate(${value}deg)`
    }

  return (
    <div className='container-clock'>
        <div className="clock">
            <div className="wrap">
            <span style={{transform: applyTransformRotate(hour)}}  className="hour"></span>
            <span style={{transform: applyTransformRotate(minute)}}  className="minute"></span>
            <span style={{transform: applyTransformRotate(second)}}  className="second"></span>
            <span className="dot"></span>
            </div>
        </div>
        <p className='time-text'>{date.toLocaleTimeString()}</p>

  </div>
  )
}

export default Clock