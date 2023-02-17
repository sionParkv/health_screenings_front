import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import classNames from 'classnames'
import React from 'react'

const ConfirmDialog = (props) => {
  const { cancel, className, content, isOpen, ok, title } = props
  const clsConfirmDialog = classNames('ConfirmDialog', className)

  return (
    <Dialog
      className={clsConfirmDialog}
      disableEscapeKeyDown
      maxWidth="xs"
      open={isOpen}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && <DialogContent>{content}</DialogContent>}
      <DialogActions>
        {cancel?.label && (
          <Button className="Cancel" onClick={cancel.action}>
            {cancel.label}
          </Button>
        )}
        {ok?.label && (
          <Button className="OK" onClick={ok.action}>
            {ok.label}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export { ConfirmDialog }
