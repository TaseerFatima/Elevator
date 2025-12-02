import React from "react";

const ElevatorBox = ({ direction }) => {
  return (
    <div>
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 
                   w-20 h-28 bg-gray-700 rounded-xl shadow-lg p-2 flex flex-col items-center justify-center"
      >
        <div className="w-full h-full bg-gray-600 rounded-lg flex items-center justify-center relative">
          <span className="text-white font-semibold">Elevator</span>

          {direction === "up" && (
            <div className="absolute top-1 left-1/2 -translate-x-1/2 text-green-500 text-2xl font-bold">
              ↑
            </div>
          )}
          {direction === "down" && (
            <div className="absolute top-1 left-1/2 -translate-x-1/2 text-red-500 text-2xl font-bold">
              ↓
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElevatorBox;
