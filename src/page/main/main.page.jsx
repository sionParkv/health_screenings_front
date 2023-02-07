import React from 'react'
import { Container } from '@mui/material'

import { Header } from '../../component'

const MainPage = () => {
  // 헤더 컴포넌트(<Header />) 속성
  return (
    <Container className="MainPage">
      <div>
        <Header />
      </div>
      <div className="Main">
        <div className="MainItem">등원체크</div>
        <div className="MainItem">수진자조회</div>
        <div className="MainItem">검사현황조회</div>
      </div>
    </Container>
  )
}

export { MainPage }
