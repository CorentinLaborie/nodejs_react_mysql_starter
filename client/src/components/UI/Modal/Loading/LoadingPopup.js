import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LoadingGif from "../../../../assets/images/loader.gif"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoadingPopup(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (!props.isLoaderOpen){
      handleClose()
    } else if(props.isLoaderOpen) {
      handleOpen()
    }
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={
          {
            sx:{
              pointerEvents: "none"
            }
          }
        }
      >
        <Box sx={style}>
             <Box sx={{ mx:"auto" }} >
             <img src={LoadingGif}  alt="loader.gif" />
            </Box>
          <Box align="center">
          </Box>
        </Box>
      </Modal>
    </div>
  );
}