import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IconList from "../components/list";
import Model3D from "../components/model";
import Nuke from "../components/toast";

import NextJsCarousel from "../components/mobcar";

export default function Home() {
  return (
    <>
    
      <NextJsCarousel />
      <IconList />
      <Nuke />
   <Model3D />
    </>
  );
}
