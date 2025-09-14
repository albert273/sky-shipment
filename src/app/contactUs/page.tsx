import ContactUsForm from '@/components/contactUs/ContactUsForm'
import ContactUsHero from '@/components/contactUs/ContactUsHero'
import { Box } from '@mui/material'
import React from 'react'

export default function page() {
  return (
    <Box>
        <ContactUsHero/>
        <ContactUsForm />
    </Box>
  )
}

