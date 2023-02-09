import { AppBar, Box, Toolbar } from '@mui/material'
import React, { Fragment } from 'react'
import { ControlledOpenSelect, SelctSort } from '../../component'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'

/**
 * 페이지 헤더 영역을 제공하는 컴포넌트.
 *
 * @returns {React.Component} 페이지 헤더 영역 컴포넌트.
 */

const Header = () => {
  const imgExit = images.btnExit
  const imgHome = images.btnHome
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
                <Box component="img" src={imgExit}></Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  )
}

export { Header }
