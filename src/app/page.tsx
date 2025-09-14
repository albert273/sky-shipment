import AboutUs from "@/components/homePage/AboutUs";
import DeliveryType from "../components/homePage/DeliveryType";
import Hero from "@/components/homePage/Hero";
import ServicesSection from "@/components/homePage/ServicesSection";
import { Box } from "@mui/material";
import ContactUs from "@/components/homePage/ContactUs";
import OurProcess from "@/components/homePage/OurProcess";

export default function Home() {
  return (
    <div>
      <Hero />
      <Box sx={{ marginX: "auto", display: "flex", justifyContent: "center" }}>
        <DeliveryType />
      </Box>
      <ServicesSection />
      <Box sx={{ position: "relative", zIndex: 2 }}>
      <AboutUs />
      </Box>
      <Box>
        <ContactUs />
      </Box>
      <Box>
        <OurProcess />
      </Box>
    </div>
  );
}
