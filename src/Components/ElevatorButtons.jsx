import React from "react";

const ElevatorButtons = ({ Addtoqueue, direction, currentFloor, queue }) => {
  const floors = [1, 2, 3, 4, 5, 6];

  const linkClasses = (id) => {
    let baseClasses =
      "w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold ";

    if (currentFloor === id) {
      if (direction === "up") return baseClasses + "bg-green-500";
      if (direction === "down") return baseClasses + "bg-red-500";
      return baseClasses + "bg-yellow-500";
    }

    if (queue.includes(id)) {
      return baseClasses + "bg-blue-500 hover:bg-blue-600";
    }

    return baseClasses + "bg-gray-500 hover:bg-gray-600";
  };

  return (
    <div className="    fixed
      left-[-263.25px] md:left-auto
      right-14 lg:right-14
      top-1/2 md:top-1/2
      -translate-y-1/2
      flex items-center justify-center p-4 flex-col">
      <div className= " grid gap-3">
        {floors.map((f) => (
          <button
            key={f}
            className={linkClasses(f)}
            onClick={() => Addtoqueue(f)}
          >
            {f}

            {currentFloor === f && direction === "up" && (
              <span className="text-green-200 text-sm ml-1">↑</span>
            )}

            {currentFloor === f && direction === "down" && (
              <span className="text-red-200 text-sm ml-1">↓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ElevatorButtons;
