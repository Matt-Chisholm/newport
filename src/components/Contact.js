import React from "react";
import { TextField, Button, Container } from "@mui/material";
import { useFormControls } from "../helpers/formValidation";
const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name",
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10,
  },
];

export default function Contact() {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();
  return (
    <form onSubmit={handleFormSubmit}>
      <Container
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#4b6d74",
        }}>
        {inputFieldValues.map((inputField, index) => (
          <TextField
            key={index}
            name={inputField.name}
            label={inputField.label}
            id={inputField.id}
            multiline={inputField.multiline}
            rows={inputField.rows}
            autoComplete='none'
            onChange={handleInputValue}
            {...(errors[inputField.name] && {
              error: true,
              helperText: errors[inputField.name],
            })}
            sx={{
              width: "50%",
              marginBottom: "1rem",
              backgroundColor: "grey",
              color: "black",
            }}
          />
        ))}
        <Button
          variant='contained'
          type='submit'
          disabled={!formIsValid}
          sx={{
            width: "2a0%",
            marginBottom: "1rem",
            backgroundColor: "#0acfcf",
            color: "black",
          }}>
          Submit
        </Button>
      </Container>
    </form>
  );
}
