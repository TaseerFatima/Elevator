import React from "react";

const ArrowControls = ({ currentFloor, setCurrentFloor }) => {
  const goUp = () => {
    if (currentFloor < 6) {
      setCurrentFloor(currentFloor + 1);
    }
  };

  const goDown = () => {
    if (currentFloor > 1) {
      setCurrentFloor(currentFloor - 1);
    }
  };

  return (
    <div>
      <div className="absolute left-3 top-1/2 -translate-y-1/2 gap-2 h-14 w-7 flex flex-col justify-center items-center bg-gray-700 rounded-xl shadow-lg p-2">
        <button
          onClick={goUp}
          className="w-0 h-0 hover:border-b-green-700
          border-l-[10px] border-l-transparent
          border-r-[10px] border-r-transparent
          border-b-[15px] border-b-green-500"
        ></button>

        <button
          onClick={goDown}
          className="w-0 h-0 hover:border-t-red-900
          border-l-[10px] border-l-transparent
          border-r-[10px] border-r-transparent
          border-t-[15px] border-t-red-600"
        ></button>
      </div>
    </div>
  );
};

export default ArrowControls;
