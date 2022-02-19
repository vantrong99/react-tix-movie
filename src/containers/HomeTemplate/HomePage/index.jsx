import React from "react";
import Carousel from "../../../components/Carousel";
import ListMovie from "../../../components/ListMovie";
import TinTuc from "./../../../components/tinTuc";
import UngDung from "./../../../components/UngDung";
import Footer from "./../../../components/Footer";
import ListRap from "../../../components/ListRap";

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <ListMovie />
      <ListRap />
      <TinTuc />
      <UngDung />
      <Footer />
    </div>
  );
}
