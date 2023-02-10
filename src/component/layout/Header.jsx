import { AppBar, Box, Dialog, DialogTitle, Toolbar } from '@mui/material'
import React, { Fragment } from 'react'
import { ControlledOpenSelect, SelctSort } from '../../component'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
/**
 * 페이지 헤더 영역을 제공하는 컴포넌트.
 *
 * @returns {React.Component} 페이지 헤더 영역 컴포넌트.
 */

const Header = () => {
  const imgExit = images.btnExit
  const imgHome = images.btnHome

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Fragment>
      <Box className="Header">
        <AppBar>
          <Toolbar>
            <Box className="Home">
              <Link to="/main">
                <Box component="img" src={imgHome} href="/main"></Box>
              </Link>
            </Box>
            <Box className="SecondBox">
              <Box className="SelectBox">
                <ControlledOpenSelect />
                <SelctSort />
              </Box>
              <Box className="ImgBox">
                <Box
                  component="img"
                  src={imgExit}
                  onClick={handleClickOpen}
                ></Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export { Header }
