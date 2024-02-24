import React from "react";
import Banner from '../../components/Banner';
import ChoosingUs from "../../components/ChoosingUs";
import ServicesHome from "../../components/ServicesHome";
import CaseStudy from "../../components/CaseStudy";
import Real from "../../components/Real";
import Footer from "../../components/Footer";
import AboutUsHome from "../../components/AboutUsHome";
import Testimonial from "../../components/Testimonial";
import TeamHome from "../../components/OurTeam/TeamHome";

const Home = () => {
  const scrollToTeamHome = () => {
    const teamHomeSection = document.getElementById('teamHomeSection');
    if (teamHomeSection) {
      teamHomeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Banner Section  */}
      <section>
        <Banner />
      </section>

      {/* About Us Section */}
      <section>
        <AboutUsHome call={scrollToTeamHome} />
      </section>

      {/* Why Choosing Us Section  */}
      <section>
        <ChoosingUs />
      </section>

      {/* TeamHome Section  */}
      <section id="teamHomeSection">
        <TeamHome />
      </section>

      {/* Services Section  */}
      <section>
        <ServicesHome />
      </section>

      {/* Case Study Section  */}
      <section>
        <CaseStudy />
      </section>

      {/* Real Section  */}
      <section>
        <Real />
      </section>

      {/* Testimonial Section  */}
      <section>
        <Testimonial />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>

    </>
  );
};

export default Home;
