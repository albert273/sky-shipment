"use client";
import { Box, Button, Stack, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function Navbar1() {
  const [type, setType] = useState("Newyork Office");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: string) => {
    setType(value);
    handleClose();
  };

  return (
    <Box
      sx={{
        width: "100%",
        color: "white",
        backgroundColor: "#0c1239e6",
        zIndex: 10000,
        paddingY: "15px",
        paddingX: "50px",
        display: { xs: "none", md: "block" },
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={2}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="outlined"
            startIcon={<LanguageIcon />}
            endIcon={<ExpandMoreIcon />}
            sx={{ color: "white", textTransform: "capitalize" }}
          >
            {type}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{zIndex: 20000000000000}}
            
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            // 👇 force menu to appear directly below button
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            // 👇 this makes it stay fixed below the button even when scrolling
            disablePortal
          >
            <MenuItem onClick={() => handleSelect("Newyork Office")}>
              Newyork Office
            </MenuItem>
            <MenuItem onClick={() => handleSelect("London Office")}>
              London Office
            </MenuItem>
            <MenuItem onClick={() => handleSelect("Paris Office")}>
              Paris Office
            </MenuItem>
          </Menu>
          <Stack direction="row" alignItems="center" gap={1}>
            <PhoneInTalkIcon sx={{ color: "#0c1239e6", fontSize: "1.4rem" }} />
            <Typography>Phone +099 222 1111</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <EmailIcon sx={{ color: "#0c1239e6", fontSize: "1.4rem" }} />
            <Typography>info@sky-shipment.com</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <LocationPinIcon sx={{ color: "#0c1239e6", fontSize: "1.4rem" }} />
            <Typography>4 sunrise building El SEfarat district nasr city </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" gap={2}>
          <FacebookIcon
            sx={{
              fontSize: "1.3rem",
              cursor: "pointer",
              "&:hover": { color: "#0c1239e6" },
              transition: ".3s",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "1.3rem",
              cursor: "pointer",
              "&:hover": { color: "#0c1239e6" },
              transition: ".3s",
            }}
          />
          <XIcon
            sx={{
              fontSize: "1.3rem",
              cursor: "pointer",
              "&:hover": { color: "#0c1239e6" },
              transition: ".3s",
            }}
          />
          <YouTubeIcon
            sx={{
              fontSize: "1.3rem",
              cursor: "pointer",
              "&:hover": { color: "#0c1239e6" },
              transition: ".3s",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
}
