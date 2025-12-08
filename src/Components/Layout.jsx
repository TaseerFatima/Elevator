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
    } else if (targetFloor < currentFloor) {
      setDownQueue((prev) =>
        prev.includes(targetFloor)
          ? prev
          : [...prev, targetFloor].sort((a, b) => b - a)
      );
    }

    if (!direction) {
      setDirection(targetFloor > currentFloor ? "up" : "down");
    }
  };

  useEffect(() => {
    const move = () => {
      if (direction === "up" && upQueue.length > 0) {
        setCurrentFloor((prev) => {
          const target = upQueue[0];

          if (prev === target) {
            setUpQueue((q) => q.filter((f) => f !== target));
            return prev;
          }

          return prev + 1;
        });
      } else if (direction === "down" && downQueue.length > 0) {
        setCurrentFloor((prev) => {
          const target = downQueue[0];

          if (prev === target) {
            setDownQueue((q) => q.filter((f) => f !== target));
            return prev;
          }

          return prev - 1;
        });
      }

      if (direction === "up" && upQueue.length === 0 && downQueue.length > 0) {
        setDirection("down");
      }

      if (
        direction === "down" &&
        downQueue.length === 0 &&
        upQueue.length > 0
      ) {
        setDirection("up");
      }

      if (
        direction === "up" &&
        upQueue.length === 0 &&
        downQueue.length === 0
      ) {
        setDirection(null);
      }

      if (
        direction === "down" &&
        downQueue.length === 0 &&
        upQueue.length === 0
      ) {
        setDirection(null);
      }
    };

    const interval = setInterval(move, 1500);
    return () => clearInterval(interval);
  }, [upQueue, downQueue, direction]);

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
