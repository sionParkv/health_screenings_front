import { Container, Typography as T } from '@mui/material'
import React from 'react'
import { MultipleSelectPlaceholder } from '../../component'

/**
 * 페이지 헤더 영역을 제공하는 컴포넌트.
 *
 * @returns {React.Component} 페이지 헤더 영역 컴포넌트.
 */

const Header = () => {
  return (
    <Container className="Header">
      <T className="test">명지병원 | 건강검진서비스</T>
      <MultipleSelectPlaceholder className="Multiple" />
      <MultipleSelectPlaceholder />
      <div className="exit">종료</div>
    </Container>
  )
}

export { Header }
