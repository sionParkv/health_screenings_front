import * as React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import { InspectionLeft, InspectionRight } from '../../component'

const RowAndColumnSpacing = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1}>
        <InspectionLeft />
        <InspectionRight />
      </Grid>
    </Box>
  )
}

export { RowAndColumnSpacing }
