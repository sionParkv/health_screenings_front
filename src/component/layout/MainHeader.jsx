import { AppBar, Box, Toolbar } from '@mui/material'
import React, { Fragment } from 'react'

const MainHeader = () => {
  return (
    <Fragment>
      <Box className="MainHeader">
        <AppBar>
          <Toolbar></Toolbar>
        </AppBar>
      </Box>
      <Toolbar></Toolbar>
    </Fragment>
  )
}

export { MainHeader }
