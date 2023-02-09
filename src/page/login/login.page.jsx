import React from 'react'
import {
  Container,
  Box,
  TextField,
  InputAdornment,
  Button,
} from '@mui/material'

import { images } from '../../assets/images'

const LoginPgae = () => {
  const loginImg = images.pic
  const profile = images.pofile
  const key = images.key
  return (
    <Container className="LoginPage">
      <Container className="LoginForm">
        <Box className="MainImage" component="img" src={loginImg} />
        <Box className="TextBox">
          <TextField
            fullWidth
            placeholder="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box component="img" src={profile} />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            fullWidth
            placeholder="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box component="img" src={key} />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Box>
        <Button className="LoginBtn" href="/main" variant="contained" sty>
          {/* <Box component="img" src={img}></Box> */}
        </Button>
      </Container>
    </Container>
  )
}

export { LoginPgae }
