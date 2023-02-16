import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const SelctSort = () => {
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
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} className="Sort">
        <InputLabel id="demo-controlled-open-select-label">정렬</InputLabel>
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
          <MenuItem value={10}>이름▼</MenuItem>
          <MenuItem value={20}>이름▲</MenuItem>
          <MenuItem value={30}>번호▼</MenuItem>
          <MenuItem value={30}>번호▲</MenuItem>
          <MenuItem value={30}>대기▼</MenuItem>
          <MenuItem value={30}>대기▲</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
export { SelctSort }
