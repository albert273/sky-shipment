"use client";
import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Container,
  Alert,
} from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUsForm() {
  const [state, handleSubmit] = useForm("mdklvodk"); // replace with your Formspree ID

  if (state.succeeded) {
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f9fafb",
          py: 8,
        }}
      >
        <Alert
          severity="success"
          sx={{ fontSize: "1.2rem", p: 3, borderRadius: 2 }}
        >
          ✅ Thank you! Your message has been sent successfully.
        </Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f9fafb",
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={4}
          color="#0c1239e6"
        >
          Contact Us
        </Typography>

        {/* Form */}
        <Stack
          spacing={3}
          component="form"
          onSubmit={handleSubmit}
          sx={{
            bgcolor: "white",
            p: 4,
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {/* Full Name */}
          <TextField
            label="Full Name"
            name="name"
            variant="outlined"
            fullWidth
            required
          />

          {/* Email */}
          <TextField
            label="Email Address"
            type="email"
            name="email"
            variant="outlined"
            fullWidth
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Phone */}
          <TextField
            label="Phone Number"
            type="tel"
            name="phone"
            variant="outlined"
            fullWidth
          />

          {/* Message */}
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={state.submitting}
            sx={{
              textTransform: "none",
              borderRadius: "30px",
              fontWeight: 600,
              py: 1.5,
              bgcolor: "#0c1239e6"
            }}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
