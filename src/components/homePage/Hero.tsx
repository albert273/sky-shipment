import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import backgroundImg from "../../../public/background_01.avif";
import img1 from "../../../public/hero_image_01.avif";
import ButtonComponent from "@/components/utils/ButtonComponent";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: {xs: "50vh",md:"100vh"},
        display: "flex",
        alignItems: {xs:"start",md:"center"},
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        px: { xs: 0, md: 1 },

      }}
    >
      <Container maxWidth={false}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={2}
          sx={{ position: "relative" }}
        >
          {/* Left Side (Text + Button) */}
          <Box flex={1} sx={{ position: "absolute" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                fontWeight: 400,
                lineHeight: 1.2,
                color: "black",
                pt: {xs: "80px", md: 0}
              }}
            >
              Secure Solutions <br />
              With
              <Box component="span" sx={{ fontWeight: "bold" }}>
                Global Reach
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: "1rem", md: "1.6rem" },
                maxWidth: "500px",
              }}
            >
              Transport and logistics company specializing in seamless global
              supply chain solutions.
            </Typography>

            <ButtonComponent />
          </Box>

          {/* Right Side (Image) */}
          <Box flex={1} sx={{ textAlign: "right", display: {xs: "none", md: "block"}}}>
            <Image
              src={img1}
              alt="logistics"
              width={950}
              height={650}
              priority
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
