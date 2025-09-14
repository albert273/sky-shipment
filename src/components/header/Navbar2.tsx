"use client";
import {
  Box,
  Stack,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../app/favicon.ico";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar2() {
  const [hover, setHover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutUs" },
    { label: "Services", path: "/services" },
    { label: "Contact Us", path: "/contactUs" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        zIndex: 100000000,
        py: 2,
        px: { xs: 2, md: 4 },
        position: "relative",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {/* Logo + Title */}
        <Stack direction="row" gap={1} alignItems="center">
          <Image src={logo} alt="logo" width={90} height={50} />
          <Typography
            sx={{ fontSize: { xs: ".9rem", md: "1.5rem" }, fontWeight: "bold" }}
          >
            <span style={{ color: "#0c1239e6" }}>Sky</span> Shipment
          </Typography>
        </Stack>

        {/* Desktop Links */}
        <Stack
          direction="row"
          gap={3}
          alignItems="center"
          sx={{
            display: { xs: "none", md: "flex" },
            fontWeight: "bold",
            ml: 4,
          }}
        >
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <Typography
                sx={{ "&:hover": { color: "#0c1239e6" }, transition: ".3s" }}
              >
                {link.label}
              </Typography>
            </Link>
          ))}
        </Stack>

        {/* Contact + Button (Desktop) */}
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Typography sx={{ fontSize: ".8rem" }}>
            <strong>Call Us:</strong> 212-345-6798
          </Typography>
          <Button
            variant="contained"
            sx={{
              pr: 3,
              pl: 0,
              py: 1.5,
              borderRadius: "50px",
              fontSize: "1rem",
              backgroundColor: "#0c1239e6",
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              overflow: "hidden",
              position: "relative",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#0c1239e6",
                pl: 3,
                pr: 0,
              },
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {/* Icon container */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                left: hover ? "5px" : "calc(100% - 45px)",
                transition: "all 0.4s ease",
                p: "8px",
                borderRadius: "50%",
                backgroundColor: hover ? "#0c1239e6" : "#0c1239e6",
                color: hover ? "#fff" : "#fff",
                justifyContent: "center",
              }}
            >
              <ArrowForwardIcon />
            </Box>

            {/* Text stays centered */}
            <Box component="span" sx={{ mx: 3 }}>
              Get Quote
            </Box>
          </Button>
        </Stack>

        {/* Mobile Menu Button */}
        {mobileOpen ? (
          <Box></Box>
        ) : (
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Stack>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ alignSelf: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileOpen(false)}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                {link.label}
              </Typography>
            </Link>
          ))}

          <Typography sx={{ fontSize: ".8rem", mt: 2 }}>
            <strong>Call Us:</strong> 212-345-6798
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
}
