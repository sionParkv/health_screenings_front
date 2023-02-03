import { FormControl, FormControlLabel, Input } from '@mui/material'
import React from 'react'

const InputField = (props) => {
  const { id, maxLength, placeholder, type } = props
  const handleChange = (eve) => {
    const ele = eve?.target
    if (!ele) return
    const val = ele.value

    if (id.indexOf('birth') > -1 && val.length > 6) {
      ele.value = val.substr(0, 6)
    }
    console.log(ele.value)
  }

  return (
    <Input
      fullWidth
      id={id}
      inputProps={{ maxLength }}
      name={id}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
    />
  )
}

const CheckField = (props) => {
  const { label } = props

  return (
    <FormControl className="CheckField" fullWidth>
      <FormControlLabel
        control={<InputField {...props} />}
        label={label}
        labelPlacement="start"
      />
    </FormControl>
  )
}

export { CheckField }
