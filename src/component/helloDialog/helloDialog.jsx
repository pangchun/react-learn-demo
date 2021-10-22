import * as React from 'react';
import { Button, TextField } from '@material-ui/core';
import { 
  Dialog, 
  DialogTitle, 
  DialogActions, 
  DialogContent, 
  DialogContentText,
  Box,
  Paper,
  Grid
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

function HelloDialog(props) {

  const { onClose, open } = props;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="lg">
      <DialogTitle>新增表单</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <div style={{width: "1000px"}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
        </div>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}

export default HelloDialog;
