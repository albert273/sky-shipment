"use client";
import { useState } from "react";
import { Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function HoverButton() {
  const [hover, setHover] = useState(false);

  return (
    <Button
      variant="contained"
      sx={{
        mt: 4,
        pr: 3,
        pl: 0,
        py: 1.5,
        borderRadius: "50px",
        fontSize: "1.125rem",
        backgroundColor: "#0c1239e6",
        color: "white",
        fontWeight: "bold",
        textTransform: "none",
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#fff",
          color: "black",
          pl: 3,
          pr: 0,
        },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Icon container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          left: hover ? "5px" : "calc(100% - 45px)",
          transition: "all 0.4s ease",
          p: "8px",
          borderRadius: "50%",
          backgroundColor: hover ? "#0c1239e6" : "#0c1239e6",
          color: hover ? "#fff" : "#fff",
          justifyContent: "center",
        }}
      >
        <ArrowForwardIcon />
      </Box>

      {/* Text stays centered */}
      <Box component="span" sx={{ mx: 3 }}>
        Our Solutions
      </Box>
    </Button>
  );
}
