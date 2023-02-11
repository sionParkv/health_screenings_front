import { AppBar, Box, Dialog, DialogTitle, Toolbar } from '@mui/material'
import React, { Fragment } from 'react'
import { ControlledOpenSelect, SelctSort } from '../../component'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
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
      <Toolbar></Toolbar>
      <Toolbar></Toolbar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'종료하시겠습니까?'}</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>종료</Button>
          <Button onClick={handleClose} autoFocus>
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export { Header }
