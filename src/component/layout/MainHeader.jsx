import { AppBar, Box, Toolbar } from '@mui/material'
import React, { Fragment } from 'react'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'
import { AlertDialog } from './ModalQuit'
import { Modal } from 'react-bootstrap'

const MainHeader = () => {
  const exit = images.btnExit
  return (
    <Fragment>
      <Box className="MainHeader">
        <AppBar>
          <Toolbar>
            <Box className="Exit">
              <Link to="/main">
                <Modal component="img" src={exit} onClick={AlertDialog}></Modal>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar></Toolbar>
      <Toolbar></Toolbar>
    </Fragment>
  )
}

export { MainHeader }
