import HomeHeader from "./home-components/Header";
import Welcome from "./home-components/Welcome";
import ContactFooter from "./home-components/ContactFooter";
import Footer from "./home-components/Footer";
import ClubLife from "./home-components/ClubLife";

const Home = () => {
  return (
    <div>
      <div>
        <HomeHeader />
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <ClubLife />
      </div>
      <div>
        <ContactFooter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
