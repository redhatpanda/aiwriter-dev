import React from "react";
import web from "../src/Image/web.png";
import Common from "./Common";
const Home = () => {
  return (
    <>

    

      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/register"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
