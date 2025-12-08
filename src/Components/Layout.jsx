import React, { useState, useEffect } from "react";
import Building from "./Building/Building";
import ElevatorButtons from "./ElevatorButtons";

const Layout = () => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [direction, setDirection] = useState(null);
  const [upQueue, setUpQueue] = useState([]);
  const [downQueue, setDownQueue] = useState([]);

  const handleExternalRequest = (requestedFloor, requestedDirection) => {
    if (requestedDirection === "up") {
      setUpQueue((prev) =>
        prev.includes(requestedFloor)
          ? prev
          : [...prev, requestedFloor].sort((a, b) => a - b)
      );
    } else if (requestedDirection === "down") {
      setDownQueue((prev) =>
        prev.includes(requestedFloor)
          ? prev
          : [...prev, requestedFloor].sort((a, b) => b - a)
      );
    }

    if (!direction) {
      setDirection(requestedDirection);
    }
  };

  const Addtoqueue = (targetFloor) => {
    if (targetFloor > currentFloor) {
      setUpQueue((prev) =>
        prev.includes(targetFloor)
          ? prev
          : [...prev, targetFloor].sort((a, b) => a - b)
      );
      if (!direction) setDirection("up");
    } else if (targetFloor < currentFloor) {
      setDownQueue((prev) =>
        prev.includes(targetFloor)
          ? prev
          : [...prev, targetFloor].sort((a, b) => b - a)
      );
      if (!direction) setDirection("down");
    }
  };

  useEffect(() => {
    const move = () => {
      let nextFloor = null;

      if (direction === "up") {
        if (upQueue.length > 0) nextFloor = upQueue[0];
        else if (downQueue.length > 0) {
          setDirection("down");
          nextFloor = downQueue[0];
        }
      } else if (direction === "down") {
        if (downQueue.length > 0) nextFloor = downQueue[0];
        else if (upQueue.length > 0) {
          setDirection("up");
          nextFloor = upQueue[0];
        }
      }

      if (nextFloor === null) {
        setDirection(null);
        return;
      }

      if (currentFloor < nextFloor) setCurrentFloor((prev) => prev + 1);
      else if (currentFloor > nextFloor) setCurrentFloor((prev) => prev - 1);
      else {
        if (direction === "up")
          setUpQueue((q) => q.filter((f) => f !== nextFloor));
        else if (direction === "down")
          setDownQueue((q) => q.filter((f) => f !== nextFloor));
      }
    };

    const interval = setInterval(move, 1500);
    return () => clearInterval(interval);
  }, [currentFloor, direction, upQueue, downQueue]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#D4C9C7] p-3 relative">
      <ElevatorButtons
        Addtoqueue={Addtoqueue}
        direction={direction}
        currentFloor={currentFloor}
        upQueue={upQueue}
        downQueue={downQueue}
      />

      <Building
        currentFloor={currentFloor}
        direction={direction}
        onRequestElevator={handleExternalRequest}
      />
    </div>
  );
};

export default Layout;
