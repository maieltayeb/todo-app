import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Todo } from '../../models/Todo';


function SimpleDialog(props: { onClose: any; selectedValue: any; open: any; }) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

 

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}
    maxWidth="sm"  sx={{paddingLeft:"16px"}}>
      <DialogTitle>{selectedValue.title}</DialogTitle>
      
      <List >
          <ListItem >
          
              <ListItemIcon>
              <ListItemText primary="Description :"/>
              </ListItemIcon>
              <ListItemText primary={selectedValue.description} />
            
          </ListItem>
          <ListItem >
          
          <ListItemIcon>
          <ListItemText primary="created at date :"/>
          </ListItemIcon>
          <ListItemText primary={selectedValue.createdAtDate} />
        
      </ListItem>
      {/* <ListItem >
          
          <ListItemIcon>
          <ListItemText primary="finishedAtDate :"/>
          </ListItemIcon>
          <ListItemText primary={selectedValue.finishedAtDate} />
        
      </ListItem> */}
   
    
      </List> 
    </Dialog>
  );
}

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

 export default function ToDoInfoDialog(props: { selectedTodo: Todo; }) {

  const [open, setOpen] = React.useState(false);
 
 const [selectedToDoValue, setSelectedToDoValue] = React.useState(props.selectedTodo);
  const handleClickOpen = () => {
   setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
//    setSelectedToDoValue(value);
  };

  return (
    <>
   
      <Button variant="text"
     onClick={handleClickOpen}
      >
        View Info
      </Button>
       <SimpleDialog
        selectedValue={props.selectedTodo}
        open={open}
        onClose={handleClose}
      />  
    </>
  );
}

