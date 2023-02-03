import React from 'react'
import { Box, Container, Typography as T } from '@mui/material'

import classNames from 'classnames'

import { Header, PatientCheckFormControl } from '../../component'

/**
 * 도착확인 환자 정보 확인 페이지를 제공하는 콤포넌트.
 *
 * @returns {React.Component} 도착확인 환자 정보 확인 페이지 컴포넌트.
 */

const ArrivalCheckPage = () => {
  const clsContainer = classNames('Pages PatientCheckPage ArrivalCheckPage')
  // 헤더 컴포넌트(<Header />)에 전달할 Props.
  const propsHeader = {
    title: <T variant="span">정보 확인</T>,
    subtitle: (
      <T variant="span">
        개인정보 보호를 위해 <T variant="em">본인 인증</T> 후<br />
        서비스 이용이 가능합니다.
      </T>
    ),
  }

  return (
    <Container className={clsContainer}>
      <Header {...propsHeader} />
      <Box className="PatientCheckForm">
        <PatientCheckFormControl type="birth" />
      </Box>
    </Container>
  )
}

export { ArrivalCheckPage }
