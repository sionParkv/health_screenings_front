import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const ControlledOpenSelect = () => {
  const [age, setAge] = React.useState('')
  const [open, setOpen] = React.useState(false)

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} className="CheckUp">
      <InputLabel id="demo-controlled-open-select-label">
        검진구문선택
      </InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={age}
        label="검진구문선택"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>전체</em>
        </MenuItem>
        <MenuItem value={10}>종합검진검수</MenuItem>
        <MenuItem value={20}>일반검진검수</MenuItem>
        <MenuItem value={30}>외부검진</MenuItem>
      </Select>
    </FormControl>
  )
}
export { ControlledOpenSelect }
