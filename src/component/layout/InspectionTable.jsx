import * as React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import { InspectionLeft, InspectionRight } from '../../component'
import axios from 'axios'

const RowAndColumnSpacing = () => {
  axios({
    method: 'POST',
    url: 'https://a52d984b-178c-409d-b64f-5e4e8cd159a0.mock.pstmn.io/api/inspection/left',
    data: {},
  }).then((result) => {
    console.log(result.data)
    console.log(result.data.data[0])
    result.data.data.map((res) => console.log(res.test))
  })

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
