import React from 'react'
import { Box, Container, Typography as T } from '@mui/material'

import classNames from 'classnames'

import { Header } from '../../component'

/**
 * 도착확인 환자 정보 확인 페이지를 제공하는 콤포넌트.
 *
 * @returns {React.Component} 도착확인 환자 정보 확인 페이지 컴포넌트.
 */

const ArrivalCheckPage = () => {
  const clsContainer = classNames('Pages PatientCheckPage ArrivalCheckPage')
  // 헤더 컴포넌트(<Header />) 속성
  const propsHeader = {
    title: <T variant="span">명지병원 | 종합검진센터</T>,
  }

  return (
    <Container className={clsContainer}>
      <Header {...propsHeader} />
      <Box className="PatientCheckForm"></Box>
    </Container>
  )
}

export { ArrivalCheckPage }
