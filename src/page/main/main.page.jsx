import { Box, Button, Container, Typography as T } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../component'
import { images } from '../../assets/images'

const MainPage = () => {
  const navigate = useNavigate()

  const buttons = [
    {
      action: (index) => {
        // window.location.href = buttons[n].href
        navigate(buttons[index]?.href)
      },
      href: '/visit',
      title: '등원체크',
      subtitle: '등원체크',
      src: images.iconButton1,
    },
    {
      action: (index) => {
        // window.location.href = buttons.href
        console.log(buttons[index]?.href)
      },
      href: '/inspection',
      title: '검사실행',
      subtitle: '수진자조회',
      src: images.iconButton1,
    },
    {
      action: (index) => {
        // window.location.href = buttons.href
        console.log(buttons[index]?.href)
      },
      href: '/patient',
      title: '수진자별',
      subtitle: '검사현황조회',
      src: images.iconButton1,
    },
  ]

  // 헤더 컴포넌트(<Header />) 속성
  return (
    <Container className="MainPage">
      <Header />
      <Container className="Main">
        {buttons.map((button, b) => (
          <Button
            key={b}
            onClick={(eve) => {
              console.log(eve)
              button.action(b)
            }}
          >
            <Box component="img" src={button.src} />
            <Box>
              <T>{button.subtitle}</T>
              <T>{button.title}</T>
            </Box>
          </Button>
        ))}
        {/* <Button>
          <Box component="img" src={images.iconButton1} />
          <Box>
            <T>등원체크</T>
            <T>등원체크</T>
          </Box>
        </Button>
        <Button>
          <Box component="img" src={images.iconButton1} />
          <Box>
            <T>등원체크</T>
            <T>등원체크</T>
          </Box>
        </Button>
        <Button>
          <Box component="img" src={images.iconButton1} />
          <Box>
            <T>등원체크</T>
            <T>등원체크</T>
          </Box>
        </Button> */}
      </Container>
    </Container>
  )
}

export { MainPage }
