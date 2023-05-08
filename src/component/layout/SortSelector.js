import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { selectors } from '../../data/selectors'

const SortSelector = (props) => {
  const { handleSortChange, sort } = props
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
        defaultValue={sort}
        onChange={handleSortChange}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        value={sort}
      >
        <MenuItem value="" disabled>
          <em>정렬</em>
        </MenuItem>
        {selectors.sorts.map((s, i) => (
          <MenuItem key={i} value={s.order}>
            {s.lable}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export { SortSelector }
