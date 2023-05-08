import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import { selectors } from '../../data/selectors'

const TypeSelector = (props) => {
  const { handleTypeChange, type } = props
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
          defaultValue={type}
          id="formId"
          onChange={handleTypeChange}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          value={type}
        >
          <MenuItem value="" disabled>
            <em>검진구문선택</em>
          </MenuItem>
          {selectors.types.map((t, i) => (
            <MenuItem key={i} value={t.where}>
              {t.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
export { TypeSelector }
