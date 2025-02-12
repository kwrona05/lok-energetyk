import HomeHeader from "./home-components/Header";
import Welcome from "./home-components/Welcome";
import ContactFooter from "./home-components/ContactFooter";
import Footer from "./home-components/Footer";

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
        <ContactFooter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
