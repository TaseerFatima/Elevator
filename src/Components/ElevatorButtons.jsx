import React from "react";

const ElevatorButtons = ({ Addtoqueue, direction, currentFloor, upQueue, downQueue }) => {
  const floors = [1, 2, 3, 4, 5, 6];

  const isQueued = (id) => {
    return upQueue?.includes(id) || downQueue?.includes(id);
  };

  const linkClasses = (id) => {
    let baseClasses =
      "w-10 h-10 flex items-center  justify-center rounded-full text-white font-semibold transition-all duration-500 ";
      baseClasses += "w-8 h-8 text-xs sm:w-10 sm:h-10 sm:text-sm md:w-12 md:h-12 md:text-base ";

    if (currentFloor === id) {
      if (direction === "up") return baseClasses + "bg-green-500 ";
      if (direction === "down") return baseClasses + "bg-red-500";
      return baseClasses + "bg-yellow-500";
    }
    
    if (isQueued(id)) {
      return baseClasses + "bg-blue-500 hover:bg-blue-600 animate-pulse";
    }

    return baseClasses + "bg-gray-500 hover:bg-gray-600";
  };

  return (
    <div
      className="fixed -left-[17rem] md:bg-[#072230]   p-2 md:rounded-lg md:shadow-md md:left-auto right-6 lg:right-12 top-1/2 md:top-1/2
      -translate-y-1/2 flex items-center justify-center flex-col"
    >
      <div className="grid gap-3 md:grid-cols-2">
        {floors.map((f) => (
          <button
            key={f}
            className={linkClasses(f)}
            onClick={() => Addtoqueue(f)}
          >
            {f}
            {currentFloor === f && direction === "up" && (
              <span className="text-green-200 font-bold ml-1">↓</span>
            )}
            {currentFloor === f && direction === "down" && (
              <span className="text-red-200  font-bold ml-1">↑</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ElevatorButtons;
