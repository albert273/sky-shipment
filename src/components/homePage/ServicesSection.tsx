import React from "react";
import { Typography, Grid, Box, Stack } from "@mui/material";

import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: "Multi-modal Operations",
    description:
      "Stay informed with real-time tracking, providing complete visibility of your shipments every step of the way for peace of mind and precise planning.",
    icon: <EarbudsIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    title: "Supply Chain Management",
    description:
      "Streamline your supply chain with our multimodal logistics, combining land, air, and sea transport to ensure efficient, reliable delivery across every mile.",
    icon: <SwapHorizIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    title: "Real-Time Tracking",
    description:
      "Adapt to your needs with our flexible scheduling solutions, offering tailored timelines and seamless to keep your operations running smoothly.",
    icon: <AccessTimeIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Ut quam metus, egestas nec interdum sed, aliquam mattis justo. In aliquam purus in ex posuere sapien egestas. Donec sed sollicitudin, id blandit erat.",
    icon: <PendingActionsIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    title: "Last-Mile Delivery",
    description:
      "Donec imperdiet elit nec erat semper, ut sodales elit rutrum. Ut congue in justo vitae blandit. Etiam faucibus magna. Aenean consectetur fringilla.",
    icon: <LocationPinIcon sx={{ fontSize: "3rem" }} />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#fff", color: "#000" }}>
      {/* Header */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "inline-block", fontWeight: 600 }}
        >
          WHAT WE OFFER
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: { xs: "1rem", md: "2.5rem" },
            color: "inherit",
          }}
        >
          Optimize your <strong>supply chain</strong> with
          <br /> expert solutions designed to deliver <br />
          efficiency and flexibility.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 10 }}
      >
        {services.map((service, index) => (
          <Stack
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: { xs: "none", md: "350px" },
              mb: "35px",
            }}
          >
            <Box sx={{ mb: 1 }}>{service.icon}</Box>
            <Typography sx={{ mb: 1, fontWeight: 600, fontSize: "1.45rem" }}>
              {service.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "1.2rem" }}
            >
              {service.description}
            </Typography>
          </Stack>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
