import { Container, Box } from '@mui/material'

import React from 'react'
import { Header, InspectionTable } from '../../component'

const InspectionPage = () => {
  return (
    <Container className="InspectionPage">
      <Header />
      <Box>
        <InspectionTable />
      </Box>
    </Container>
  )
}

export { InspectionPage }
