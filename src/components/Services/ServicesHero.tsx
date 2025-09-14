"use client";
import { Box, Typography, Container } from "@mui/material";
import React from "react";
export default function ServicesHero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "97%",
        height: { xs: "50vh", md: "80vh" },
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        marginX: "auto",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/services/hero_services.jpg"
        alt="Logistics background"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      {/* Overlay (optional for dark effect) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
      <Container
        sx={{ position: "relative", zIndex: 2, color: "white", maxWidth: "lg" }}
      >
        <Typography
          variant="subtitle2"
          sx={{ mb: 2, fontWeight: 500, letterSpacing: 2 }}
        >
          • OUR SERVICES
        </Typography>
        <Typography  sx={{ fontWeight: 600, lineHeight: 1.3, fontSize: {xs: "1rem", md: "3rem"} }}>
          Optimize Your Supply Chain With{" "}
        </Typography>
        <Typography  sx={{ fontWeight: 800, lineHeight: 1.3, fontSize: {xs: "1rem", md: "3rem"} }}>
          Expert Solutions
        </Typography>
      </Container>
    </Box>
  );
}
