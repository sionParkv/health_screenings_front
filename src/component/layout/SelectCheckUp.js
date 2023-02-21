import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const ControlledOpenSelect = () => {
  const [age, setAge] = React.useState('none')
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
    <FormControl sx={{ m: 1 }}>
      {/* <InputLabel>검진구문선택</InputLabel> */}
      <Select
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        // label="검진구문선택"

        onChange={handleChange}
        defaultValue={age}
      >
        <MenuItem value="none" disabled>
          <em>전체</em>
        </MenuItem>
        <MenuItem value="">전체</MenuItem>
        <MenuItem value={10}>이름▼</MenuItem>
        <MenuItem value={20}>이름▲</MenuItem>
        <MenuItem value={30}>번호▼</MenuItem>
        <MenuItem value={30}>번호▲</MenuItem>
      </Select>
    </FormControl>
  )
}
export { ControlledOpenSelect }
