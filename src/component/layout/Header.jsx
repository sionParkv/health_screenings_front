import { AppBar, Box, Toolbar } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { ConfirmDialog, SortSelector, TypeSelector } from '../../component'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'

/**
 * 페이지 헤더 영역을 제공하는 컴포넌트.
 *
 * @returns {React.Component} 페이지 헤더 영역 컴포넌트.
 */
const Header = (props) => {
  const imgExit = images.btnExit
  const imgHome = images.btnHome

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
          console.log('로그아웃')
        },
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
                <TypeSelector {...props} />
                <SortSelector {...props} />
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
      <ConfirmDialog {...propsDialog} />
    </Fragment>
  )
}

export { Header }
