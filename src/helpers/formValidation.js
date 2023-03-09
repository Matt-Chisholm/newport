import { useState } from "react";

const initialFormValues = {
  name: "",
  email: "",
  message: "",
  formSubmitted: false,
  success: false,
};

export const useFormControls = () => {
  // We'll update "values" as the form updates
  const [values, setValues] = useState(initialFormValues);
  // "errors" is used to check the form for errors
  const [errors, setErrors] = useState({});
  const validate = (values) => {
    // this function will check if the form values are valid
    let temp = { ...errors };
    if ("name" in values)
      temp.name = values.name ? "" : "This field is required.";

    if ("email" in values)
      temp.email = values.email ? "" : "This field is required.";

    if ("message" in values)
      temp.message = values.message ? "" : "This field is required.";

    setErrors({
      ...temp,
    });
  };
  const handleInputValue = (values) => {
    // this function will be triggered by the text field's onBlur and onChange events
    const { name, value } = values.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };
  const handleFormSubmit = async (e) => {
    // this function will be triggered by the submit event
    e.preventDefault();
    if (formIsValid()) {
      await postContactForm(values);
      alert("Form submitted successfully!");
      setValues({
        ...initialFormValues,
        formSubmitted: true,
        success: true,
      });
    }
  };
  const formIsValid = (fieldValues = values) => {
    // this function will check if the form values and return a boolean value
    const isValid = Object.values(fieldValues).every((x) => x);
    return isValid;
  };
  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
  };
};
