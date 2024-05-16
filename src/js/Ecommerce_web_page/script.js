const ARForm = document.getElementById("ECOMM-FORM");
const inputsAR = ARForm.querySelectorAll(".ECOMM-formInput");
const textareaAR = ARForm.querySelector("textarea");
const allFieldsAR = [...inputsAR];
const variableErrorMessagesAR = {
  email: {
    empty: "The email is required and cannot be empty",
    wrong: "Please enter a valid email",
  },
  contactNumber: {
    empty: "The Contact number is required please enter a valid number",
    wrong: "Only numbers are valid",
    short: "Contact number should be atleast 10-12 digit",
  },
};
const isEmailValidAR = (value) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(value);
};
const toggleErrorsAR = (check, errorHolder) => {
  if (check) {
    errorHolder.classList.remove("showError");
  } else {
    errorHolder.classList.add("showError");
  }
};
const isEmptyAR = (field) => {
  return !(field.value.trim().length > 0);
};
const validateInputsAR = (inputField) => {
  const fieldNames = [
    "ECOMM-userName",
    "ECOMM-email",
    "ECOMM-contact",
    "ECOMM-message",
  ];
  const { name, value } = inputField;

  const isNameValid = fieldNames.includes(name);
  const notEmpty = value.trim().length > 0;

  if (name === "ECOMM-email" && notEmpty) {
    return isEmailValidAR(value.trim());
  }
  if (name === "ECOMM-contact" && notEmpty) {
    return !isNaN(+value);
  }
  return isNameValid && notEmpty;
};

ARForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const errorsList = {};

  allFieldsAR.forEach((field) => {
    const passed = validateInputsAR(field);
    if (!passed) {
      errorsList[field.name] = true;
    }
  });
  const errorNodes = ARForm.querySelectorAll("small");
  if (!Object.keys(errorsList).length) {
    ARForm.submit();
  }
  Object.keys(errorsList).forEach((error) => {
    Array.from(errorNodes)
      .find((node) => {
        return node?.dataset?.inputname === error;
      })
      .classList.add("showError");
  });
});
inputsAR.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const errorHolder = input.nextElementSibling;
    if (input.name === "ECOMM-email" && !isEmailValidAR(input.value)) {
      errorHolder.textContent =
        input.value.length > 0
          ? variableErrorMessagesAR.email.wrong
          : variableErrorMessagesAR.email.empty;
      errorHolder.classList.add("showError");
      return;
    }
    if (input.name === "ECOMM-contact") {
      errorHolder.textContent =
        input.value.length === 0
          ? variableErrorMessagesAR.contactNumber.empty
          : input.value.length >= 10 && input.value.length <= 12
          ? ""
          : variableErrorMessagesAR.contactNumber.short;
      errorHolder.classList.add("showError");
      return;
    }
    toggleErrorsAR(!isEmptyAR(input), errorHolder);
  });
});
