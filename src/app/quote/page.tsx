"use client";
import React from "react";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

export default function GetQuotePage() {
  const [state, handleSubmit] = useForm("yourFormspreeID"); // replace with your Formspree ID

  if (state.succeeded) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Thank you!
        </Typography>
        <Typography variant="body1">
          Your request has been received. We will contact you shortly.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Get a Quote
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ mb: 4, color: "text.secondary" }}
      >
        Fill out the form below and our team will provide you with a cargo
        shipping quote.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {/* Row 1: Name + Email */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box flex={1}>
            <TextField
              fullWidth
              required
              id="name"
              name="name"
              label="Full Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </Box>
          <Box flex={1}>
            <TextField
              fullWidth
              required
              id="email"
              name="email"
              type="email"
              label="Email Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Box>
        </Box>

        {/* Row 2: Phone + Cargo Type */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box flex={1}>
            <TextField
              fullWidth
              required
              id="phone"
              name="phone"
              label="Phone Number"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </Box>
          <Box flex={1}>
            <TextField
              fullWidth
              required
              id="cargoType"
              name="cargoType"
              label="Cargo Type"
            />
            <ValidationError
              prefix="Cargo Type"
              field="cargoType"
              errors={state.errors}
            />
          </Box>
        </Box>

        {/* Row 3: Weight + Length + Width */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box flex={1}>
            <TextField
              fullWidth
              required
              id="weight"
              name="weight"
              type="number"
              label="Weight (kg)"
            />
          </Box>
          <Box flex={1}>
            <TextField
              fullWidth
              required
              id="length"
              name="length"
              type="number"
              label="Length (cm)"
            />
          </Box>
          <Box flex={1}>
            <TextField
              fullWidth
              required
              id="width"
              name="width"
              type="number"
              label="Width (cm)"
            />
          </Box>
        </Box>

        {/* Row 4: Additional Details */}
        <TextField
          fullWidth
          id="message"
          name="message"
          label="Additional Details"
          multiline
          rows={4}
        />

        {/* Submit Button */}
        <Box textAlign="center" mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={state.submitting}
            sx={{
              px: 16,
              py: 1.5,
              fontSize: "1rem",
              textTransform: "none",
              borderRadius: "30px",
              fontWeight: 600,
              bgcolor: "#0c1239e6",
            }}
          >
            {state.submitting ? "Sending..." : "Request Quote"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
