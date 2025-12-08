import ElevatorBox from "../Floors/ElevatorBox";
import ArrowControls from "./ArrowControls";

const Floors = ({ currentFloor, direction,onRequestElevator }) => {
  const FLOORS = [
    { id: 6, name: "Roof ", desc: "Outdoor terrace + penthouse suite" },
    { id: 5, name: "Residential - 5th", desc: "2 BR apartment" },
    { id: 4, name: "Residential - 4th", desc: "2 BR apartment" },
    { id: 3, name: "Residential - 3rd", desc: "1 BR + study" },
    { id: 2, name: "Commercial - 2nd", desc: "Small office" },
    { id: 1, name: "Lobby", desc: "Lobby, reception" },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto p-4">
      {FLOORS.map((floor) => (
        <div
  key={floor.id}
  className={`relative bg-[#2D383e] rounded-xl border-2 border-gray-600 shadow-md p-[15px] text-center
    ${floor.id === currentFloor ? "ring-2 ring-yellow-400 ring-offset-2 animate-pulse" : ""}`}
>

          <h3 className="font-bold text-lg md:text-base text-white">
            {floor.name}
          </h3>
          <p className="text-xs md:text-sm text-gray-400">{floor.desc}</p>
          <ArrowControls floorNumber={floor.id} onRequestElevator={onRequestElevator} />

          {floor.id === currentFloor && <ElevatorBox direction={direction} />}
        </div>
      ))}
    </div>
  );
};

export default Floors;
