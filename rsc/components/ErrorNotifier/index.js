import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export  const  ErrorDialog=({open, title, content, onClose, allowContinue=true})=>{

  const handleClose = () => {
  	onClose()
  };

  return (
    <div>
      	<Dialog
	        open={open}
	        onClose={handleClose}
	        aria-labelledby="alert-dialog-title"
	        aria-describedby="alert-dialog-description"
	      >
	        <DialogTitle id="alert-dialog-title">{title ?? "Oups! Une erreur est survenue"}</DialogTitle>
	        {
	        	content && 
	        	<DialogContent>
					<DialogContentText id="alert-dialog-description">
		            	{content}
		          	</DialogContentText>
		        </DialogContent>	
	        }
	        
	        <DialogActions>
	          	<Button onClick={()=>{
	          		location.reload();
	          		return false;
	          	}} color="primary">
	            	Rafraichir la page
	          	</Button>
	          	{
	          		allowContinue &&
	          		<Button onClick={handleClose} color="primary" autoFocus>
		            	Continuer
		          	</Button>
	          	}
	        </DialogActions>
      	</Dialog>
    </div>
  );
}
