import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const InspectionRight = () => {
  return (
    <Grid xs={6} className="InspectionRight">
      <Item className="InfoTop">
        <Box>1</Box>
        <Box>8797977</Box>
        <Box>초음3파</Box>
        <Box>박시온</Box>
        <Box>960623</Box>
        <Button>진행중</Button>
      </Item>
      <Item className="infoBottom">
        <Box>V</Box>
        <Box>초음팩</Box>
        <Box></Box>
        <Box>M/26</Box>
        <Box>대기시간:</Box>
        <Box>10분</Box>
      </Item>
    </Grid>
  )
}
export { InspectionRight }
