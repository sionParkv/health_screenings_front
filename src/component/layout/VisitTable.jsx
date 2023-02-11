import * as React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import { Button } from '@mui/material'

function TablePaginationActions(props) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}

function createData(
  code,
  number,
  patientNumber,
  name,
  personal,
  birth,
  packet,
  register,
  ticket
) {
  return {
    code,
    number,
    patientNumber,
    name,
    personal,
    birth,
    packet,
    register,
    ticket,
  }
}
axios({
  method: 'POST',
  url: 'https://a52d984b-178c-409d-b64f-5e4e8cd159a0.mock.pstmn.io/api/visit',
  data: {},
}).then((result) => {
  console.log(result.data)
  console.log(result.data.data[0])
  result.data.data.map((res) => {
    console.log(res.test)
  })
})
const rows = [
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    'dd'
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
  createData(
    'VR',
    1,
    3.7,
    '박시온',
    'M/26',
    '960623',
    '패키지',
    '종합검진검수',
    Button
  ),
].sort((a, b) => (a.calories < b.calories ? -1 : 1))

const CustomPaginationActionsTable = () => {
  const [page] = React.useState(0)
  const [rowsPerPage] = React.useState(5)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.number}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.patientNumber}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.personal}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.birth}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.packet}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.register}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Button>dd</Button>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export { CustomPaginationActionsTable }
