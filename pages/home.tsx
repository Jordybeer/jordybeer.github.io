import React from "react";
import Carousel from "../components/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Model3D from "../components/model";
import NextJsCarousel from "../components/mobcar";

export default function Home() {
  return (
    <>
      <Model3D />
      <NextJsCarousel />
    </>
  );
}
