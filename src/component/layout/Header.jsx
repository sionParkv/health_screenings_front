import { Box, Typography as T } from '@mui/material'
import React from 'react'

const Header = (props) => {
  const { title, subtitle } = props

  return (
    <Box className="Header">
      <T variant="h1">{title}</T>
      <T variant="subtitle" component="p">
        {subtitle}
      </T>
    </Box>
  )
}

export { Header }
