import Map from "../components/Map";

const Home = ({ listings, setListings }) => {
  return (
    <div className="w-screen font-mono h-screen">
      <Map listings={listings} setListings={setListings} />
    </div>
  );
};

export default Home;
