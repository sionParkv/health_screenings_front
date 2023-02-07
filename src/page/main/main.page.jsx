import React from 'react'
import { Container, Typography as T } from '@mui/material'

import { Header } from '../../component'

const ArrivalCheckPage = () => {
  // 헤더 컴포넌트(<Header />) 속성
  const propsHeader = {
    title: <T variant="span">명지병원 | 종합검진센터</T>,
  }

  return (
    <Container>
      <Header {...propsHeader} />
    </Container>
  )
}

export { ArrivalCheckPage }
