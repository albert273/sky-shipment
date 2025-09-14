"use client";
import { Box, Stack, Typography, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import map from "../../../public/footer/mape.png";
import Link from "next/link";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#262626", color: "white" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Stack>
          {/* Top Section */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
            sx={{
              pb: { xs: 4, md: 6 },
              borderBottom: "1px solid gray",
              gap: { xs: 3, md: 0 },
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: "bold", color: "white", mb: 2 }}
              >
                CONTACT US
              </Typography>
              <Typography sx={{ color: "white", fontSize: { xs: "1rem", md: "1.5rem" } }}>
                212-345-6798 789 <br />
                Oak Boulevard, Floor 5, New York
                <br />
                enquires@freyt.bt
              </Typography>
            </Box>
            <Box sx={{ maxWidth: { xs: "100%", md: "600px" }, width: "100%" }}>
              <Image
                src={map}
                alt="map"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Stack>

          {/* Bottom Section */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            sx={{ pt: { xs: 4, md: 6 }, gap: { xs: 4, md: 0 } }}
          >
            {/* Left side */}
            <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
              <Typography>
                Providing reliable, efficient, and secure logistics solutions
                <br />
                worldwide. From freight forwarding to real-time tracking, we
                <br />
                keep your business moving.
              </Typography>
            </Box>

            {/* Right side - Links */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              gap={{ xs: 4, sm: 10 }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    mb: 2,
                  }}
                >
                  Company
                </Typography>
                <Link href={"/"}>
                  <Typography>Home</Typography>
                </Link>
                <Link href={"/aboutUs"}>
                  <Typography>About Us</Typography>
                </Link>
                <Link href={"/services"}>
                  <Typography>Services</Typography>
                </Link>
                <Link href={"/contactUs"}>
                  <Typography>Contact Us</Typography>
                </Link>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    mb: 2,
                  }}
                >
                  Contact
                </Typography>
                <Typography>
                  789 Oak Boulevard,
                  <br /> Floor 5 New York, NY 10018
                </Typography>
                <Typography>212-345-6798</Typography>
                <Typography>enquires@freyt.bt</Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
