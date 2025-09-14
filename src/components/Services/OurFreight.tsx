import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import seaFreight from "../../../public/DriverType/card_image_01.avif";
import airFreight from "../../../public/DriverType/card_image_02.avif";
import roadFreight from "../../../public/DriverType/card_image_03.avif";
import railFreight from "../../../public/DriverType/card_image_04.avif";

const freightData: FreightCardProps[] = [
  {
    title: "Sea Freight",
    description: "Reliable storage with real-time monitoring",
    image: seaFreight,
  },
  {
    title: "Air Freight",
    description: "Efficient and cost-effective freight solutions",
    image: airFreight,
  },
  {
    title: "Road Freight",
    description: "Scalable fulfillment for online retailers",
    image: roadFreight,
  },
  {
    title: "Rail Freight",
    description: "Reliable delivery to your customers doorstep",
    image: railFreight,
  },
];
type FreightCardProps = {
  title: string;
  description: string;
  image: StaticImageData | string;
};
export default function OurFreight() {
  return (
    <Box
      sx={{
        backgroundColor: "#262626",
        color: "white",
        borderBottomRightRadius: { xs: 0, md: "150px" },
        borderBottomLeftRadius: { xs: 0, md: "150px" },
      }}
    >
      <Stack sx={{ px: { xs: "10px", md: "150px" }, py: "70px" }}>
        <Typography sx={{ fontSize: "2rem", width: "500px", mb: "40px" }}>
        Our freight forwarding services ensure smooth, efficient, and reliable global shipping.
        </Typography>
        <Stack
          direction={{xs: "column",md:"row"}}
          justifyContent={"center"}
          gap={3}
          alignItems={"center"}
          sx={{ pt: "30px" }}
        >
          {freightData.map((card) => (
            <Card
              key={card.title}
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                height: 450,
                width: 315,
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
                  src={card.image}
                  alt={card.title}
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

              {/* Content */}
              <CardContent sx={{ position: "relative", color: "white" }}>
                <Typography
                  variant="body2"
                  sx={{
                    bgcolor: "rgba(0,0,0,0.6)",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    display: "inline-block",
                    position: "absolute",
                    top: -280,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    mb: 2,
                    fontSize: "1rem",
                    lineHeight: "1.375",
                    textAlign: "center",
                  }}
                >
                  {card.description}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    borderRadius: 5,
                    textTransform: "none",
                    fontWeight: 600,
                    width: "100%",
                    height: "50px",
                    px: 3,
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Explore Solutions
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
