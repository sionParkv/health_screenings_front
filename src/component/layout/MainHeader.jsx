import { AppBar, Box, Toolbar } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'
import { ConfirmDialog } from './ConfirmDialog'

const MainHeader = () => {
  const exit = images.btnExit
  // const [open, setOpen] = React.useState(false)

  const [propsDialog, setPropsDialog] = useState({
    content: '',
    isOpen: false,
    ok: { action: () => closeDialog(), label: '' },
    title: '',
  })
  const closeDialog = () => setPropsDialog({ ...propsDialog, isOpen: false })

  const handleClickOpen = () => {
    // setOpen(true)
    setPropsDialog({
      ...propsDialog,
      title: '메인',
      content: '종료하시겠습니까?',
      isOpen: true,
      ok: {
        label: '확인',
        action: () => {
          sessionStorage.clear()
          window.location.replace('/')
        },
        href: '/',
      },
      cancel: {
        label: '취소',
        action: () => {
          closeDialog()
        },
      },
    })
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
      <ConfirmDialog {...propsDialog} />
    </Fragment>
  )
}

export { MainHeader }
