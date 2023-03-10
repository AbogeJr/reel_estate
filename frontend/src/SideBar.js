const kanairo = require("./kanairo.jpeg");

const SideBar = ({ location, onClose }) => {
  return (
    <div className="sidebar font-mono overflow-scroll p-3 relative bg-neutral-800 text-white md:w-2/5 right-0 top-24 ml-auto mx-4 flex  flex-col  z-30  items-center rounded-lg bg-white">
      <button
        onClick={onClose}
        className="text-3xl p-3 absolute top-0 right-0 self-start hover:text-red-500 hover:scale-125"
      >
        &times;
      </button>
      <h2 className="text-2xl font-thin p-2">{location.name}</h2>
      <figure className="w-full">
        <img src={kanairo} className="w-full mb-2" alt="Property Sample" />
        <figcaption>
          Description: 3 Bedroom Bungalow for sale with SQ in Rongai...
        </figcaption>
        <figcaption>Price: Ksh. 4,000,000</figcaption>
      </figure>

      <button className="p-2 border self-end text-sm rounded-md">
        View Property
      </button>
    </div>
  );
};

export default SideBar;
