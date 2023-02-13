import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
const PatientLeft = () => {
  return (
    <Grid xs={5} className="PatientLeft">
      <Item className="room">
        <Box>1</Box>
        <Box>87599993</Box>
        <Box>박시온</Box>
        <Box>M/26</Box>
        <Box>960623</Box>
      </Item>
      <Item className="state">
        <Box>VR</Box>
        <Box>패키지IP</Box>
        <Box></Box>
        <Box>종합검진검수</Box>
        <Box></Box>
      </Item>
    </Grid>
  )
}

export { PatientLeft }
