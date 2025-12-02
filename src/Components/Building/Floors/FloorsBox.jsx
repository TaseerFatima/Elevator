import ElevatorBox from "../Floors/ElevatorBox";
import ArrowControls from "./ArrowControls";

const Floors = ({ currentFloor, direction, setCurrentFloor }) => {
  const FLOORS = [
    { id: 6, name: "Roof ", desc: "Outdoor terrace + penthouse suite" },
    { id: 5, name: "Residential - 5th", desc: "2 BR apartment" },
    { id: 4, name: "Residential - 4th", desc: "2 BR apartment" },
    { id: 3, name: "Residential - 3rd", desc: "1 BR + study" },
    { id: 2, name: "Commercial - 2nd", desc: "Small office" },
    { id: 1, name: "Lobby", desc: "Lobby, reception" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {FLOORS.map((floor) => (
        <div
          key={floor.id}
          className="relative bg-[#2D383e] rounded-xl shadow-md p-4 text-center"
        >
          <h2 className="text-lg font-bold text-white">{floor.name}</h2>
          <p className="text-gray-400 mt-2">{floor.desc}</p>
          <ArrowControls
            currentFloor={currentFloor}
            setCurrentFloor={setCurrentFloor}
          />

          {floor.id === currentFloor && <ElevatorBox direction={direction} />}
        </div>
      ))}
    </div>
  );
};

export default Floors;
