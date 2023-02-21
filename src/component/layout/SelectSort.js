import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const SelctSort = (props) => {
  const { handleChange, value } = props
  const [open, setOpen] = React.useState(false)
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
          id="formId"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value || '전체'}
          onChange={handleChange}
          defaultValue={value || '전체'}
        >
          <MenuItem value="" disabled>
            <em>검진구문선택</em>
          </MenuItem>
          <MenuItem value="전체">전체</MenuItem>
          <MenuItem value="종합건진접수">종합건진접수</MenuItem>
          <MenuItem value="일반건진접수">일반건진접수</MenuItem>
          <MenuItem value="외부검진">외부검진</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
export { SelctSort }
