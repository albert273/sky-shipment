"use client";
import { useState } from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import image from "../../../public/aboutUs/video_image_01-ezgif.com-jpg-to-avif-converter.avif";
import VideoComponent from "../utils/VideoComponent";

export default function AboutUs() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Box sx={{ px: { xs: 2, md: 4 }, pb: "100px", pt:{ xs: 2, md: 4 }, borderBottomRightRadius: { xs: 0, md: "150px" }, borderBottomLeftRadius: { xs: 0, md: "150px" }, backgroundColor: "#efefef" }}>
        {/* Section Title */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "inline-block", fontWeight: 600 }}
          >
            ABOUT US
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
            We are your <strong>trusted partner</strong> in
            <br /> global logistics, offering tailored <br />
            solutions that drive your business <br />
            forward.
          </Typography>
        </Box>

        {/* Image + Play Button + Text */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ px: "20px", marginTop: "70px" }}
          gap={{ xs: 4, md: 30 }}
        >
          {/* Video Thumbnail */}
          <Box>
            <Card
              sx={{
                position: "relative",
                borderRadius: 4.5,
                overflow: "hidden",
                height: 250,
                width: 450,
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Box sx={{ position: "absolute", inset: 0 }}>
                <Image src={image} alt={"title"} fill style={{ objectFit: "cover" }} />
              </Box>
              {/* Play Icon */}
              <Box
                sx={{
                  position: "absolute",
                  top: "90px",
                  left: "190px",
                  zIndex: 3,
                }}
              >
                <PlayCircleFilledRoundedIcon
                  onClick={() => setShowVideo(true)}
                  sx={{
                    fontSize: "5rem",
                    color: "#bdb8b2",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    "&:hover": { color: "white" },
                  }}
                />
              </Box>
            </Card>
          </Box>

          {/* Text */}
          <Stack gap={4}>
            <Typography>
              Freyt is transport and logistics company specializing in seamless
              global supply chain solutions across sea, air, road, and rail. With
              decades of experience in the industry, we have built a reputation
              for reliability, efficiency, and innovation. Whether it’s moving
              goods across continents or delivering time-sensitive shipments,
              Freyt is committed to ensuring your cargo reaches its destination
              safely and on time.
            </Typography>
            <Typography>
              We believe that strong relationships are the foundation of
              successful logistics, and we work closely with our clients to
              deliver personalized service that exceeds expectations. Whether
              you’re a small business or a multinational corporation, Freyt is
              your trusted partner for all your transportation and logistics
              needs.
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* Overlay Video */}
      {showVideo && <VideoComponent onClose={() => setShowVideo(false)} />}
    </>
  );
}
