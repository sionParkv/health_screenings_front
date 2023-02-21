import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const SelctSort = () => {
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
    <div>
      <FormControl sx={{ m: 1 }}>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          defaultValue={age}
        >
          <MenuItem value="none" disabled>
            <em>검진구문선택</em>
          </MenuItem>
          <MenuItem value="">전체</MenuItem>
          <MenuItem value="10">종합검진검수</MenuItem>
          <MenuItem value="20">일반검진검수</MenuItem>
          <MenuItem value="30">외부검진</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
export { SelctSort }
