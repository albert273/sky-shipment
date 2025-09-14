import OurProcess from '@/components/homePage/OurProcess'
import OurFreight from '@/components/Services/OurFreight'
import ServicesHero from '@/components/Services/ServicesHero'
import ServicesTypes from '@/components/Services/ServicesTypes'
import { Box } from '@mui/material'
import React from 'react'

export default function page() {
  return (
    <Box>
        <ServicesHero/>
        <ServicesTypes />
        <OurFreight />
        <OurProcess/>
    </Box>
  )
}


