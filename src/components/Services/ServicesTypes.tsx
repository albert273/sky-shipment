"use client";
import { Box, Typography, Grid, Button, List, ListItem } from "@mui/material";
import React from "react";
import { AccessTime, Autorenew, Inventory2 } from "@mui/icons-material";

const services = [
  {
    icon: <Inventory2 sx={{ color: "white" }} />,
    title: "Standard Shipping",
    points: [
      "Shipping option for non-urgent deliveries",
      "Faster delivery enhances trust and loyalty",
      "Minimizing warehousing expenses",
    ],
  },
  {
    icon: <AccessTime sx={{ color: "white" }} />,
    title: "Express Delivery",
    points: [
      "Get your package by the next day",
      "Guaranteed on-time delivery",
      "Ideal for time-sensitive packages",
    ],
  },
  {
    icon: <Autorenew sx={{ color: "white" }} />,
    title: "Same-Day Delivery",
    points: [
      "Get packages delivered within hours",
      "Faster delivery enhances trust and loyalty",
      "Minimizing warehousing expenses",
    ],
  },
  {
    icon: <Inventory2 sx={{ color: "white" }} />,
    title: "Standard Shipping",
    points: [
      "Shipping option for non-urgent deliveries",
      "Faster delivery enhances trust and loyalty",
      "Minimizing warehousing expenses",
    ],
  },
  {
    icon: <AccessTime sx={{ color: "white" }} />,
    title: "Express Delivery",
    points: [
      "Get your package by the next day",
      "Guaranteed on-time delivery",
      "Ideal for time-sensitive packages",
    ],
  },
  {
    icon: <Autorenew sx={{ color: "white" }} />,
    title: "Same-Day Delivery",
    points: [
      "Get packages delivered within hours",
      "Faster delivery enhances trust and loyalty",
      "Minimizing warehousing expenses",
    ],
  },
];

export default function ServicesSection() {
  return (
    <Box
      sx={{
        bgcolor: "#262626",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh", // take full screen height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // vertical + horizontal centering
          px: { xs: "10px", md: "150px" },
          textAlign: "center",
          bgcolor: "white",
          pb: "70px",
          pt: "40px",
          borderBottomRightRadius: { xs: 0, md: "150px" },
          borderBottomLeftRadius: { xs: 0, md: "150px" },
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: "1.7rem",
            lineHeight: 1.3,
            mb: 5,
            textAlign: "start",
          }}
        >
          Optimize your supply chain with <br />{" "}
          <strong>expert solutions</strong> designed to deliver
          <br /> logistic efficiency.
        </Typography>

        {/* Grid */}
        <Grid
          container
          spacing={3}
          justifyContent="center" // horizontally center grid items
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 30%" }, // responsive widths
                display: "flex",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <Box
                sx={{
                  bgcolor: "#f9f7eb",
                  borderRadius: "20px",
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                  width: "350px",
                }}
              >
                {/* Icon Box */}
                <Box
                  sx={{
                    bgcolor: "#f89d2a",
                    borderRadius: "8px",
                    p: 1.5,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    width: "50px",
                    height: "50px",
                  }}
                >
                  {service.icon}
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  fontWeight={600}
                  gutterBottom
                  sx={{ mb: "40px" }}
                >
                  {service.title}
                </Typography>

                {/* List */}
                <List sx={{ pl: 2, mb: 3 }}>
                  {service.points.map((point, i) => (
                    <ListItem
                      key={i}
                      sx={{
                        display: "list-item",
                        listStyleType: "disc",
                        py: 0.5,
                        color: "#444",
                        fontSize: ".8rem",
                      }}
                    >
                      {point}
                    </ListItem>
                  ))}
                </List>

                {/* CTA Button */}
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    borderRadius: "30px",
                    borderColor: "#ccc",
                    textTransform: "none",
                    fontWeight: 500,
                    alignSelf: "center",
                    px: 4,
                    width: "100%",
                    fontSize: ".8rem",
                  }}
                >
                  Get Free Quote
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
