import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function Info() {
  return (
    <Box sx={{ backgroundColor: "#262626" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-around"}
        sx={{
          width: "100%",
          borderBottomRightRadius: { xs: 0, md: "150px" },
          borderBottomLeftRadius: { xs: 0, md: "150px" },
          backgroundColor: "white",
          py: "70px",
        }}
      >
        <Stack sx={{ width: "400px" }} alignItems={"center"}>
          <Typography
            sx={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}
          >
            45 Years
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", marginBottom: "5px", fontSize: ".7rem" }}
          >
            YEARS IN BUSINESS
          </Typography>
          <Typography sx={{ fontSize: ".6rem" }}>
            45 years of trusted expertise in delivering seamless <br />
            logistics solutions worldwide.
          </Typography>
        </Stack>

        <Stack sx={{ width: "400px" }} alignItems={"center"}>
          <Typography
            sx={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}
          >
            1 million
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", marginBottom: "5px", fontSize: ".7rem" }}
          >
            MILES COVERED MONTHLY
          </Typography>
          <Typography sx={{ fontSize: ".6rem" }}>
            Covering over million miles monthly, we ensure your <br />
            cargo reaches its efficiently and on time, every time.
          </Typography>
        </Stack>

        <Stack sx={{ width: "400px" }} alignItems={"center"}>
          <Typography
            sx={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}
          >
            360k
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", marginBottom: "5px", fontSize: ".7rem" }}
          >
            TONS OF CARGO DELIVERED ANNUALLY
            <Typography sx={{ fontSize: ".6rem" }}>
              We consistently transport 360,000 tons of cargo annually,
              <br /> ensurin g and secure delivery for businesses globally.
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
