import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import OurProducts from "../OurProducts/OurProducts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <About></About>
      </section>
      <section>
        <Services></Services>
      </section>
      <section>
        <ContactUs></ContactUs>
      </section>
      <section>
        <OurProducts></OurProducts>
      </section>
    </div>
  );
};

export default Home;
