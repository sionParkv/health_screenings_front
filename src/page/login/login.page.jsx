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
        method: 'post',
        url: 'http://192.168.1.13:4000/api/login',
        data: {
          account_id: id,
          account_pass: pwd,
        },
      })

      console.log(res.data)
      console.log(res.data?.code)
      if (res.data?.code === 'OK') {
        console.log('Logged succesfully!')
        setLoginStatus(
          `Logged succesfully! Welcome back ${res.data.data.username}`
        )
        window.location.replace('/main')
      } else {
        alert('아이디 혹은 비밀번호를 잘못 입력 하였습니다.')
      }
    } catch (err) {
      console.log(`⛔⛔⛔: ${err.message}`)
      setLoginStatus(err.message)
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
            variant="contained"
            onClick={handlerLogin}
          ></Button>
        </Box>
      </Container>
    </Container>
  )
}
export { LoginPgae }
