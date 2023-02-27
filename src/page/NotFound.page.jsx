import React from 'react'
import { Container } from '@mui/material'

/**
 * HTTP 404 오류 페이지를 제공하는 컴포넌트.
 *
 * @returns {React.Component} 404 오류 페이지 컴포넌트.
 */

const NotFoundPage = () => (
  <Container>
    {/* TODO: 페이지 디자인 요청 후 적용 */}
    <h1>명지병원 건강검진 서비스</h1>
    <h2>페이지를 찾을 수 없습니다.</h2>
    <img alt="logo" className="logo" src="/images/logo.svg" />
  </Container>
)

export { NotFoundPage }
