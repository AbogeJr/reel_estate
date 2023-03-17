import PropertyCard from "./PropertyCard";

const SideBar = ({ location, onClose }) => {
  return (
    <div className="font-mono overflow-scroll relative bg-white md:w-2/5 top-24 right-0 ml-auto mx-4 flex  flex-col  0  items-center rounded-lg ">
      <button
        onClick={onClose}
        className="text-2xl  rounded-lg px-5 pt-2 top-0  left-0 self-start hover:text-red-500 hover:scale-125"
      >
        &times;
      </button>
      <PropertyCard property={location} />
    </div>
  );
};

export default SideBar;
