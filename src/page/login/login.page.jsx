import React, { useEffect, useState } from 'react'
import {
  Container,
  Box,
  TextField,
  InputAdornment,
  Button,
} from '@mui/material'

import { images } from '../../assets/images'
import axios from 'axios'

const LoginPgae = () => {
  const loginImg = images.pic
  const profile = images.pofile
  const key = images.key

  const [id, setId] = useState('')
  const [pwd, setPwd] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const handlerLogin = (e) => {
    e.preventDefault()
    login()
  }

  const login = async () => {
    try {
      // In the port of the server obviously
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:4000/api/login',
        data: {
          username: id,
          password: pwd,
        },
      })

      console.log(res.data)
      if (res.data.status === 'success') {
        console.log('Logged succesfully!')
        setLoginStatus(
          `Logged succesfully! Welcome back ${res.data.data.username}`
        )
      }
    } catch (err) {
      console.log(`⛔⛔⛔: ${err.response.data.message}`)
      setLoginStatus(err.response.data.message)
    }
  }

  return (
    <Container className="LoginPage">
      <Container className="LoginForm">
        <Box className="MainImage" component="img" src={loginImg} />
        <Box className="InfoBottom">
          <Box className="TextBox">
            <TextField
              value={id}
              onChange={(e) => setId(e.target.value)}
              name="input_id"
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
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              name="input_pwd"
              type="password"
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
          <Button
            className="LoginBtn"
            href="/main"
            variant="contained"
            onClick={handlerLogin}
          ></Button>
        </Box>
      </Container>
    </Container>
  )
}
export { LoginPgae }
