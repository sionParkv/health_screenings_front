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

const InspectionLeft = () => {
  return (
    <Grid xs={4} className="InspectionLeft">
      <Item className="room">
        <Box>종합</Box>
        <Box>골밀도 검사실</Box>
      </Item>
      <Item className="state">
        <Box>진행</Box>
        <Box>대기</Box>
        <Box>미실행</Box>
        <Box>완료</Box>
      </Item>
      <Item className="room">
        <Box>종합</Box>
        <Box>골밀도 검사실</Box>
      </Item>
      <Item className="state">
        <Box>진행</Box>
        <Box>대기</Box>
        <Box>미실행</Box>
        <Box>완료</Box>
      </Item>
      <Item className="room">
        <Box>종합</Box>
        <Box>골밀도 검사실</Box>
      </Item>
      <Item className="state">
        <Box>진행</Box>
        <Box>대기</Box>
        <Box>미실행</Box>
        <Box>완료</Box>
      </Item>
    </Grid>
  )
}
export { InspectionLeft }
