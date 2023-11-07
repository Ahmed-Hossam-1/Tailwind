import Features from "../components/Features";
import GetStarted from "../components/GetStarted";
import Landing from "../components/Landing";
import NotFound from "../components/NotFound";
import StayProductive from "../components/StayProductive";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Landing />
      <Features />
      <StayProductive />
      <Testimonials />
      <GetStarted />
    </>
  );
};

export default Home;
