import React from 'react'
import { Container } from '@mui/material'

// TODO: 페이지 디자인 요청 후 적용
const NotFoundPage = () => (
  <Container>
    <h1>명지병원 건강검진 서비스</h1>
    <h2>페이지를 찾을 수 없습니다.</h2>
    <img alt="logo" className="logo" src="/images/logo.svg" />
  </Container>
)

export { NotFoundPage }
