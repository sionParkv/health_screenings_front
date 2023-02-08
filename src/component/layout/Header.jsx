import { AppBar, Box, Container, Typography as T, Toolbar } from '@mui/material'
import React, { Fragment } from 'react'
import { ControlledOpenSelect } from '../../component'

/**
 * 페이지 헤더 영역을 제공하는 컴포넌트.
 *
 * @returns {React.Component} 페이지 헤더 영역 컴포넌트.
 */

const Header = () => {
  return (
    <Fragment>
      <Box className="Header">
        <AppBar>
          <Toolbar>
            <ControlledOpenSelect />
            <ControlledOpenSelect />
          </Toolbar>
        </AppBar>
      </Box>
      {/* <T className="test">명지병원 | 건강검진서비스</T>
      <ControlledOpenSelect className="Multiple" />
      <ControlledOpenSelect />
      <div className="exit">종료</div> */}
    </Fragment>
  )
}

export { Header }
