"use client";
import { Box } from "@mui/material";
import React from "react";

export default function ContactUs() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {xs:"80vh",md:"140vh"},
        backgroundColor: "white",
        overflow: "hidden", // ensure rounded corners clip video
      }}
    >
      {/* Background video */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          top: -140,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          borderBottomRightRadius: { xs: 0, md: "150px" },
          borderBottomLeftRadius: { xs: 0, md: "150px" },
          marginBottom: 0,
        }}
      >
        <source src="/contactUs/contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
    </Box>
  );
}
