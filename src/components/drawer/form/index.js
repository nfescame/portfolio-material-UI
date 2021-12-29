import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
} from "@material-ui/core";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Contact me
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contacts</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Phone Number: +55 (11) 93203-2703
          </DialogContentText>
          <DialogContentText>E-mail: nfescame@gmail.com</DialogContentText>
          <DialogContentText>
            To send an email, please enter your email and message and click
            send.
          </DialogContentText>
          <form
            action='https://formsubmit.co/nfescame@gmail.com'
            method='POST'
            class='container'
          >
            <TextField
              type='hidden'
              name='_autoresponse'
              value='Recebi a sua mensagem, obrigado pelo contato e logo responderei.'
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Name'
              type='name'
              name='name'
              fullWidth
              variant='standard'
            />

            <TextField
              margin='dense'
              id='name'
              label='Email Address'
              type='email'
              name='email'
              fullWidth
              variant='standard'
            />

            <TextField
              margin='dense'
              id='name'
              label='Subject'
              type='text'
              name='subject'
              fullWidth
              variant='standard'
            />

            <TextareaAutosize
              aria-label='empty textarea'
              placeholder='Mensage'
              name='message'
              style={{
                width: "100%",
                height: "5rem",
                color: "black",
                background: "#f2f2f2",
                fontFamily: "cursive",
                fontSize: "1.5rem",
              }}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type='submit'>Send</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
