import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../Copyright/Copyright';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DatePicker from '@mui/lab/DatePicker';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from "axios"

// JS FUNCTIONS //
import myFunctions from "../../js_functions/MyFunctions"
import LoadingPopup from '../UI/Modal/Loading/LoadingPopup';





export default function Welcome(props) {
  

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{
        transition : "opacity 0.4s easy-in-out",
      }}>
      <Copyright sx={{ mt: 5 }} />
    </Container>


    {/* ERROR MODAL */}

    </>
  );
}