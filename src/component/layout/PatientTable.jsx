import React from 'react'
import { PatientLeft, PatientRight } from '../../component'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const PatientTable = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} classname="PatientTable">
        <PatientLeft />
        <PatientRight />
      </Grid>
    </Box>
  )
}

export { PatientTable }
