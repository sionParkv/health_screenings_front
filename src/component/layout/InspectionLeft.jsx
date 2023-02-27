import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import axios from 'axios'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const url =
  'https://a52d984b-178c-409d-b64f-5e4e8cd159a0.mock.pstmn.io/api/inspection/left'

const InspectionLeft = () => {
  axios.post(url).then((response) => {
    console.log(response.data.data[0])
  })

  return (
    <Grid xs={3} className="InspectionLeft">
      <Item className="room">
        <Box>종합</Box>
        <Box>골밀도 검사실</Box>
      </Item>
      <Item className="state">
        <Box>진행 : 0</Box>
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
