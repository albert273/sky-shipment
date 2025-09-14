"use client";

import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import img from "../../../public/ourProcess/ourProcess.avif";

interface QuoteStep {
  id: number;
  title: string;
  description: string;
}

const data: QuoteStep[] = [
  {
    id: 1,
    title: "STEP 1: Request a Quote",
    description:
      "Start by requesting a quote—share your shipping details, and we’ll provide a tailored solution with transparent pricing and expert recommendations.",
  },
  {
    id: 2,
    title: "STEP 2: Schedule Transfer",
    description:
      "Once you approve the quote, schedule your transfer at a time that works for you. We ensure a smooth, timely pickup and coordination.",
  },
  {
    id: 3,
    title: "STEP 3: In-Transit Tracking",
    description:
      "Track your shipment in real-time with our advanced tracking system, ensuring transparency, security, and on-time delivery.",
  },
];

export default function OurProcess() {
  return (
    <Box sx={{ backgroundColor: "#262626" }}>
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          pb: { xs: 6, md: 10 },
          backgroundColor: "#fff",
          borderBottomRightRadius: { xs: 0, md: "150px" },
          borderBottomLeftRadius: { xs: 0, md: "150px" },
        }}
      >
        {/* Section Title */}
        <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 600 }}
          >
            OUR PROCESS
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontWeight: 400,
              lineHeight: 1.5,
              fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2.2rem" },
              color: "inherit",
            }}
          >
            We make freight forwarding simple
            <br /> with a <strong>step-by-step process</strong>
            <br /> designed for efficiency and reliability.
          </Typography>
        </Box>

        {/* Image + Steps */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={{ xs: 6, md: 12 }}
        >
          {/* Left - Image */}
          <Card
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              height: { xs: 250, sm: 350, md: 420 },
              width: { xs: "100%", sm: 400, md: 300 },
              maxWidth: "100%",
              flexShrink: 0,
            }}
          >
            <Image
              src={img}
              alt="Our Process"
              fill
              style={{ objectFit: "cover" }}
            />
          </Card>

          {/* Right - Steps */}
          <Stack sx={{ flex: 1 }} spacing={3}>
            {data.map((step, index) => (
              <Box
                key={step.id}
                sx={{
                  pb: 3,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // stack on small screens
                  gap: { xs: 1.5, sm: 3 },
                  borderBottom:
                    index !== data.length - 1 ? "1px solid #e0e0e0" : "none",
                }}
              >
                {/* Title */}
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                    fontWeight: 600,
                    mb: { xs: 1, sm: 0 },
                    minWidth: { sm: "200px" },
                  }}
                >
                  {step.title}
                </Typography>

                {/* Description */}
                <Typography
                  color="text.secondary"
                  sx={{ flex: 1, fontSize: { xs: "0.9rem", md: "1rem" } }}
                >
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
