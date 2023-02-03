import React from 'react'
import { Container, Typography as T } from '@mui/material'
import classNames from 'classnames'

import { Header } from '../../component'

const ArrivalCheckPage = () => {
  const clsContainer = classNames('Pages PatientCheckPage ArrivalCheckPage')
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
    </Container>
  )
}

export { ArrivalCheckPage }
