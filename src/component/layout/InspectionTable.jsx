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

const RowAndColumnSpacing = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1}>
        <Grid xs={6}>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>

          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
          <Item>22</Item>
        </Grid>
        <Grid xs={6}>
          <Item>2</Item>
          <Item>2</Item>
          <Item>2</Item>
          <Item>2</Item>
          <Item>2</Item>
          <Item>2</Item>
          <Item>2</Item>
          <Item>2</Item>
          <Item>2</Item>
          <Item>2</Item>
          <Item>2</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export { RowAndColumnSpacing }
