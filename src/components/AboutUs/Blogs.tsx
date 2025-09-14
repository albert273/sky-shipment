import { Box, Card, Container, Stack, Typography } from "@mui/material";
import React from "react";
import backgroundImg from "../../../public/background_01.avif";
import Image from "next/image";
import img1 from "../../../public/aboutUs/post_11-640x400.jpg";
import img2 from "../../../public/aboutUs/post_12-640x400.jpg";

export default function Blogs() {
  return (
    <Box sx={{ backgroundColor: "#262626" }}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImg.src})`,
          pt: "60px",
          pb: "100px",
          borderBottomRightRadius: { xs: 0, md: "150px" },
          borderBottomLeftRadius: { xs: 0, md: "150px" },
        }}
      >
        <Container>
          <Typography
            sx={{ fontSize: "2rem", fontWeight: 400, marginBottom: "30px" }}
          >
            Latest Blog
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box sx={{ cursor: "pointer" }}>
              <Card
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  height: 320,
                  width: 540,
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                {/* Background Image */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "transparent",
                  }}
                >
                  <Image
                    src={img2}
                    alt={"img1"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                    }}
                  />
                </Box>
              </Card>
              <Typography
                sx={{
                  fontSize: ".9rem",
                  color: "#979793",
                  margin: "10px",
                  marginBottom: 0,
                  marginLeft: "10px",
                }}
              >
                December 25, 2024
              </Typography>
              <Typography sx={{ fontSize: "1.1rem" }}>
                AI Revolutionizing Supply Chains
              </Typography>
            </Box>
            <Box sx={{ cursor: "pointer" }}>
              <Card
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  height: 320,
                  width: 540,
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                {/* Background Image */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "transparent",
                  }}
                >
                  <Image
                    src={img1}
                    alt={"img2"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                    }}
                  />
                </Box>
              </Card>
              <Typography
                sx={{
                  fontSize: ".9rem",
                  color: "#979793",
                  margin: "10px",
                  marginBottom: 0,
                  marginLeft: "10px",
                }}
              >
                December 15, 2024
              </Typography>
              <Typography sx={{ fontSize: "1.1rem" }}>
                E-commerce Growth Fuels Demand for Last-Mile Delivery Solutions
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
