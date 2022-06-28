import React from "react";
import { Header } from "../../components/Header/Header";
import { WhoWeAre } from "../../components/WhoWeAre/WhoWeAre";

export const Home = () => {
  return (
    <div>
      <Header />
      {/* call for book */}
      <WhoWeAre />
    </div>
  );
};
