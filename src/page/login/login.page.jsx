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
        <Box className="InfoBottom">
          <Box className="TextBox">
            <TextField
              id="id"
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
              id="password"
              type="password"
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
          <Button className="LoginBtn" href="/main" variant="contained">
            {/* <Box component="img" src={img}></Box> */}
          </Button>
        </Box>
      </Container>
    </Container>
  )
}

export { LoginPgae }
