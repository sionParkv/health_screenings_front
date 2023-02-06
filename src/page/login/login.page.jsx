import React from 'react'
import {
  Button,
  Container,
  Box,
  TextField,
  InputAdornment,
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import KeyIcon from '@mui/icons-material/Key'

const LoginPgae = () => {
  return (
    <Container className="Pages LoginPage">
      <Box className="MainImage" />
      <Container className="LoginForm">
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <Button
          href="/arrival"
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
        >
          로그인
        </Button>
      </Container>
    </Container>
  )
}

export { LoginPgae }
