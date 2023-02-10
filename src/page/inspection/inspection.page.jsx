import { Container, Box } from '@mui/material'

import React from 'react'
import { Header, RowAndColumnSpacing } from '../../component'

const InspectionPage = () => {
  return (
    <Container className="InspectionPage">
      <Header />
      <Box>
        <RowAndColumnSpacing />
      </Box>
    </Container>
  )
}

export { InspectionPage }
