import AboutHero from "@/components/AboutUs/AboutHero";
import Blogs from "@/components/AboutUs/Blogs";
import Info from "@/components/AboutUs/Info";
import Map from "@/components/AboutUs/Map";
import { Stack } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Stack>
      <AboutHero />
      <Info />
      <Map/>
      <Blogs/>
    </Stack>
  );
}
