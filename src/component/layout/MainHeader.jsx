import { AppBar, Box, Dialog, DialogTitle, Toolbar } from '@mui/material'
import React, { Fragment } from 'react'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

const MainHeader = () => {
  const exit = images.btnExit
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Fragment>
      <Box className="MainHeader">
        <AppBar>
          <Toolbar>
            <Box className="Exit">
              <Link to="/main">
                <Box component="img" src={exit} onClick={handleClickOpen}></Box>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar></Toolbar>
      <Toolbar></Toolbar>
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

export { MainHeader }
