import React from "react"; 
import Hero from "../components/Hero";
import JobGrid from "../components/JobGrid";
import Service from "../components/Service";
import Freelancing from "../components/Freelancing";

const Home = () => {
  return (
     <div>
      <Hero/>
      <JobGrid/>
      <Service/>
      <Freelancing/>
     </div>
  );
};

export default Home;

 