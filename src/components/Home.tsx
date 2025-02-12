import HomeHeader from "./home-components/Header";
import Welcome from "./home-components/Welcome";

const Home = () => {
  return (
    <div>
      <div>
        <HomeHeader />
      </div>
      <div>
        <Welcome />
      </div>
    </div>
  );
};
export default Home;
