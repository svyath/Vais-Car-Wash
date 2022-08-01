import React from "react";
import { ApplyForCarWash } from "../../components/ApplyForCarWash/ApplyForCarWash";
import { DryCleaning } from "../../components/DryCleaning/DryCleaning";
import { Header } from "../../components/Header/Header";
import { WhoWeAre } from "../../components/WhoWeAre/WhoWeAre";

export const Home = () => {
  return (
    <div>
      <Header />
      {/* call for book */}
      <WhoWeAre />
      {/* washing services */}
      <DryCleaning />
      {/* advantages */}
      {/* what your clients say */}
      <ApplyForCarWash />
    </div>
  );
};
