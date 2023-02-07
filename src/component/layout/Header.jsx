import { Container, Typography as T } from '@mui/material'
import React from 'react'
import { MultipleSelectPlaceholder } from '../../component'

/**
 * 페이지 헤더 영역을 제공하는 컴포넌트.
 *
 * @param {React.ComponentProps} props 컴포넌트에 전달된 속성 겍채.
 * @param {React.Component|String} props.title 페이지 제목.
 * @param {React.Component|String} props.subtitle 페이지 설명.
 * @returns {React.Component} 페이지 헤더 영역 컴포넌트.
 */

const Header = (props) => {
  const { title } = props

  return (
    <Container className="Pages Header">
      <T className="test">{title}</T>
      <MultipleSelectPlaceholder />
    </Container>
  )
}

export { Header }
