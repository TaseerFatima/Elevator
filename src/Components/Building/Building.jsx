import React from 'react'
import Floors from "./Floors/FloorsBox"

const Building = ({currentFloor,direction,Addtoqueue,onRequestElevator}) => {
  return (
    <div className='mb-4 mt-6  bg-[#072230] ml-12 max-w-md p-4 lg:w-96 rounded-lg shadow-md'>
       <h1 className="text-xl md:text-2xl font-bold text-center mb-6 text-white">
          Elevator Control System
        </h1>
     < Floors currentFloor={currentFloor} direction={direction} Addtoqueue={Addtoqueue} onRequestElevator={onRequestElevator}/>

    </div>
  )
}

export default Building



