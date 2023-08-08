import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IconList from "../components/list";
import Model3D from "../components/model";
import NextJsCarousel from "../components/mobcar";
import { Divider } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
    
      <NextJsCarousel />
      <IconList />
      <Divider />   <Model3D />
   <Divider />
   
    </>
  );
}
