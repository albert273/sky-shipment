"use client";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Grid from "@mui/material/Grid";
import seaFreight from "../../../public/DriverType/card_image_01.avif";
import airFreight from "../../../public/DriverType/card_image_02.avif";
import roadFreight from "../../../public/DriverType/card_image_03.avif";
import railFreight from "../../../public/DriverType/card_image_04.avif";

const freightData: FreightCardProps[] = [
  {
    id: 4,
    title: "Sea Freight",
    description: "Global Reach, Reliable Sea Freight Solutions",
    image: seaFreight,
  },
  {
    id: 3,
    title: "Air Freight",
    description: "Move High-Value Items Swiftly with Air Freight",
    image: airFreight,
  },
  {
    id: 2,
    title: "Road Freight",
    description: "Ship Quickly Nationwide with Road Freight",
    image: roadFreight,
  },
  {
    id: 1,
    title: "Rail Freight",
    description: "Seamless Rail Logistics to Power Your Business",
    image: railFreight,
  },
];

type FreightCardProps = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
};

const FreightCard = ({ title, description, image }: FreightCardProps) => {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        height: 500,
        width: 315,
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{ position: "absolute", inset: 0, backgroundColor: "transparent" }}
      >
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
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
            top: -310,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mb: 2,
            fontSize: "1.5rem",
            lineHeight: "1.375",
            textAlign: "center",
          }}
        >
          {description}
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
  );
};

export default function DeliveryType() {
  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>
      <Grid
        container
        spacing={3}
        justifyContent={{ xs: "center", md: "flex-start" }} // center on small screens
      >
        {freightData.map((item) => (
          <Box
            key={item.id}
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 22%" }, // responsive widths
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FreightCard {...item} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
