import React from 'react'
import Floors from "./Floors/FloorsBox"

const Building = ({currentFloor,direction,setCurrentFloor}) => {
  return (
    <div className='h-[670px] mb-4 mt-6 w-[400px] bg-[#072230] mx-auto max-w-md p-4 rounded-lg shadow-md'>
     < Floors currentFloor={currentFloor} direction={direction} setCurrentFloor={setCurrentFloor} />

    </div>
  )
}

export default Building
