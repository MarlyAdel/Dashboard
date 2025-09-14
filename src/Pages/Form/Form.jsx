import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../Components/Header";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "User",
    label: "User",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "Editor",
    label: "Editor",
  },
];

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPhone = /^\+?[0-9]{10,15}$$/;
 

  export default function Form() {

   const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // validate while typing
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    setOpen(true);
    reset(); 
  };

   const handleClick = () => {
     setOpen(true);
   };

  const handleClose = ( reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  return (
    <>
     <Header title={"Create User"} subTitle={"Create a New User Profile"}/>
      {/* Text Field */}
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          mx: "1px",
          pt: "5px",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 3 }} direction={"row"}>
          <TextField
            helperText={
              Boolean(errors.firstName)
                ? "This filed is required & min 3 characters"
                : null
            }
            error={Boolean(errors.firstName)}
            sx={{ flex: 1 }}
            {...register("firstName", { required: true, minLength: 3 })}
            label="First Name"
            variant="filled"
          />
          <TextField
            helperText={
              Boolean(errors.LastName)
                ? "This filed is required & min 3 characters"
                : null
            }
            error={Boolean(errors.LastName)}
            sx={{ flex: 1 }}
            {...register("LastName", { required: true, minLength: 3 })}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        <TextField
          helperText={
            Boolean(errors.email) ? "Provide a vaild email address" : null
          }
          error={Boolean(errors.email)}
          sx={{ flex: 1 }}
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />
        <TextField
          helperText={
            Boolean(errors.phone) ? "Provide a vaild Phone Number" : null
          }
          error={Boolean(errors.phone)}
          sx={{ flex: 1 }}
          {...register("phone", { required: true, pattern: regPhone })}
          label="Contact Number"
          variant="filled"
        />
        <TextField label="Address 1" variant="filled" />
        <TextField label="Address 2" variant="filled" />

        <TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            disabled={!isValid}
            onClick={handleClick}
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create New User
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
}
