import React, { useState, useEffect } from "react";
import Building from "./Building/Building";
import ElevatorButtons from "./ElevatorButtons";

const Layout = () => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [direction, setDirection] = useState(null);
  const [queue, setQueue] = useState([]);
  // const [isMoving, setIsMoving] = useState(false);

  const Addtoqueue = (targetFloor) => {
    setQueue((prev) => {
      if (prev.includes(targetFloor)) return prev;
      const newQueue = [...prev, targetFloor];

      let effectiveDirection = direction ;
      if (!direction){
        effectiveDirection = targetFloor > currentFloor ? "up" : "down";
        setDirection(effectiveDirection);
      }

      if (effectiveDirection === "up"){
        return newQueue.sort((a,b)=> a - b);
      }else
        return newQueue.sort((a,b)=> b - a);
    });
  };


   
  useEffect(() => {
    if (queue.length === 0) return;

    const move = () => {
      setCurrentFloor((prev) => {
        const target = queue[0];

        if (prev === target) {
          setQueue((prevQueue) =>
            prevQueue.filter((floor) => floor !== target)
          );
          setDirection(null);
          return prev;
        }

        const up = prev < target;
        setDirection(up ? "up" : "down");
        return up ? prev + 1 : prev - 1;
      });
    };

    const interval = setInterval(move, 2000);
    return () => clearInterval(interval);
  }, [queue]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#D4C9C7] p-3 relative">
      <div>Queue: {queue.join(', ')}</div>
      <ElevatorButtons 
        Addtoqueue={Addtoqueue} 
        direction={direction} 
        currentFloor={currentFloor}
        queue={queue} 
      />
      <Building 
        currentFloor={currentFloor}
        direction={direction}
      />
      
  </div>
  );
};

export default Layout;
