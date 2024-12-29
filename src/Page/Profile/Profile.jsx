import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
// import React from "react";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Hedar from "../../Components/Hedar";





export default function Profile() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = () => {
    handleClick()
    return console.log("daz");
    
  }


  const regEmail=
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const regnumber = /^\+?[0-9]{1,3}?[-. ]?([0-9]{3}|\([0-9]{3}\))[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
  
  
  
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
  
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };
  
  const handleClick = () => {
    setOpen(true);
  };
  const Data = [
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Manager',
      label: 'Manager',
    },
    {
      value: 'user',
      label: 'user',
    },
  ];



  return (
    
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
     <Hedar titel={"CREATE USER"} suptitel={"create new user profile"}/>
      <Stack sx={{ gap: 3 }} direction={"row"}>
        <TextField error={errors.FirstName}  helperText={(errors.FirstName) ?"this field is required & min 3 character":null}
        {...register("FirstName", { required: true, minLength: 3 })} 
          sx={{ flex: 1 }} label="First Name" variant="filled" />
        <TextField error={errors.FirstName}  helperText={(errors.FirstName) ?"this field is required & min 3 character":null}
        {...register("LastName", { required: true, minLength: 3})} 
         sx={{ flex: 1 }} label="Last Name" variant="filled" />
      </Stack>
      <TextField   error={errors.Email}  helperText={(errors.Email) ?"please provide avalid email adress " :null}
        {...register("Email", { required: true, minLength: 3, pattern: regEmail})}  id="filled-basic" label="Email" variant="filled" />

      <TextField     error={errors.ContactNumbr}  helperText={(errors.ContactNumbr) ?"please provide avalid phone number " :null}
        {...register("ContactNumbr", { required: true, minLength: 3, pattern: regnumber })} id="filled-basic" label="Contact Numbr" variant="filled" />
      <TextField id="filled-basic" label="Adresss 1" variant="filled" />
      <TextField id="filled-basic" label="Adresss 2" variant="filled" />
      <TextField
        id="filled-select-currency"
        select
        label="Role"
        defaultValue="user"
        variant="filled"
      >
        {Data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button   type="submit" sx={{ textTransform: "Capitalize" }} variant='contained'>Create New User</Button>
      </Box>
      <Snackbar 
  open={open} 
  autoHideDuration={3000} 
  onClose={handleClose} 
  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // تحديد الزاوية
>
  <Alert
    onClose={handleClose}
    severity="info" 
    variant="filled"
    sx={{ 
      width: '100%', 
      marginLeft: '50px' 
    }}
  >
    Accounnt Create successfally!
  </Alert>
</Snackbar>
    </Box>
  )
}
