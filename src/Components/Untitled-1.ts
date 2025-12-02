 // lets suppose we are on current floor 4, target floor is 2, queue have  [3, 7] and direction is down

    // if (currentFloor < targetFloor && direction === "down") {
    //   const targetIndex = queue.findIndex(
    //     (value) => value < targetFloor || currentFloor < targetFloor
    //   );
    //   queue.splice(targetIndex, 0, targetFloor);
    //   setQueue(...queue);
    // } else








       // const moveElevator = (currentQueue) => {
  //   const [targetFloor, nextInQueue] = currentQueue;
  //   setIsMoving(true);

  //   const interval = setInterval(() => {
  //     setCurrentFloor((prevFloor) => {
  //       if (prevFloor === targetFloor) {
  //         clearInterval(interval);
  //         setQueue((prev) => prev.slice(1));
  //         if (!nextInQueue) {
  //           setDirection(null);
  //           setIsMoving(false);
  //         }
  //         setDirection(currentFloor < nextInQueue ? "up" : "down");
  //         return prevFloor;
  //       }

  //       const nextFloor =
  //         prevFloor < targetFloor ? prevFloor + 1 : prevFloor - 1;
  //       setDirection(prevFloor < targetFloor ? "up" : "down");

  //       return nextFloor;
  //     });
  //   }, 2000);
//   // };



//   useEffect(() => {
//   if (queue.length === 0) return;

//   // Split queue into above (up) and below (down)
//   const above = queue.filter(f => f > currentFloor).sort((a, b) => a - b);
//   const below = queue.filter(f => f < currentFloor).sort((a, b) => b - a);

//   let nextTarget = null;

  // Decide next target based on direction
//   if (direction === "up" || direction === null) {
//     nextTarget = above.length > 0 ? above[0] : below[0];
//   } else {
//     nextTarget = below.length > 0 ? below[0] : above[0];
//   }

//   const move = () => {
//     setCurrentFloor(prev => {
//       if (prev === nextTarget) {
//         setQueue(prev => prev.filter(f => f !== nextTarget));
//         return prev;
//       }

//       const up = prev < nextTarget;
//       setDirection(up ? "up" : "down");
//       return up ? prev + 1 : prev - 1;
//     });
//   };

//   const interval = setInterval(move, 1500);
//   return () => clearInterval(interval);
// }, [queue, currentFloor, direction]);

// const Addtoqueue = (targetFloor) => {
//   setQueue((prev) => {
//     if (prev.includes(targetFloor)) return prev;

//     const newQueue = [...prev, targetFloor];

//     // Determine direction if not set yet
//     let effectiveDirection = direction;
//     if (!direction) {
//       effectiveDirection = targetFloor > currentFloor ? "up" : "down";
//       setDirection(effectiveDirection);
//     }

//     // Sort queue according to direction
//     if (effectiveDirection === "up") {
//       return newQueue.sort((a, b) => a - b); // ascending
//     } else {
//       return newQueue.sort((a, b) => b - a); // descending
//     }
//   });
// };







import React from "react";

const ElevatorButtons = ({ Addtoqueue, direction, currentFloor, queue }) => {
  const floors = [1, 2, 3, 4, 5, 6];

 

  return (
    <div className="flex flex-col gap-2 p-4">
      {floors.map((f) => (
        <button
          key={f}
          onClick={() => Addtoqueue(f)}
          className={linkClasses(f)}
        >
          {f}
          
          {currentFloor === f && direction === "up" && (
            <span className="ml-1">↑</span>
          )}
          
          {currentFloor === f && direction === "down" && (
            <span className="ml-1">↓</span>
          )}
          
          {/* Show queued indicator for floors in queue but not current */}
          {queue.includes(f) && currentFloor !== f && (
            <span className="ml-1 text-xs">•</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ElevatorButtons;
