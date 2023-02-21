import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const ControlledOpenSelect = (props) => {
  const { handleChange, value } = props
  console.log('!!!!!!!!!!', props)
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <FormControl sx={{ m: 1 }}>
      <Select
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value || '전체'}
        onChange={handleChange}
        defaultValue={value || '전체'}
      >
        <MenuItem value={0} disabled>
          <em>전체</em>
        </MenuItem>
        <MenuItem value={0}>전체</MenuItem>
        <MenuItem value={10}>이름▼</MenuItem>
        <MenuItem value={20}>이름▲</MenuItem>
        <MenuItem value={30}>번호▼</MenuItem>
        <MenuItem value={40}>번호▲</MenuItem>
      </Select>
    </FormControl>
  )
}
export { ControlledOpenSelect }
