"use client";
import { Box, Stack } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type VideoProps = {
  onClose: () => void;
};

export default function VideoComponent({ onClose }: VideoProps) {
  return (
    <Box
      sx={{
        position: "fixed", // 👈 Overlay
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.9)", // dark overlay
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1300, // above everything
      }}
    >
      {/* Close Button */}
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{ width: "100%", p: 2 }}
      >
        <CloseRoundedIcon
          onClick={onClose}
          sx={{
            fontSize: "2.5rem",
            color: "white",
            cursor: "pointer",
            "&:hover": { color: "#0c1239e6" },
          }}
        />
      </Stack>

      <Box
        sx={{
          width: "850px",
          height: "480px",
          maxWidth: "90%",
          maxHeight: "70%",
        }}
      >
        <video
          controls
          autoPlay
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        >
          <source src="/aboutUs/logistics.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
}
