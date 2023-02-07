import { Box, Button, Container, Typography as T } from '@mui/material'
import React from 'react'

import { Header } from '../../component'
import { images } from '../../assets/images'

const MainPage = () => {
  const buttons = [
    {
      action: () => (window.location.href = 'https://m.naver.com'),
      title: '등원체크 1',
      subtitle: '등원체크 1',
      src: images.iconButton1,
    },
    {
      action: () => alert(2),
      title: '등원체크 2',
      subtitle: '등원체크 2',
      src: images.iconButton1,
    },
    {
      action: () => alert(3),
      title: '등원체크 3',
      subtitle: '등원체크 3',
      src: images.iconButton1,
    },
  ]

  // 헤더 컴포넌트(<Header />) 속성
  return (
    <Container className="MainPage">
      <Header />
      <Container className="Main">
        {buttons.map((button, b) => (
          <Button key={b} onClick={button.action}>
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
