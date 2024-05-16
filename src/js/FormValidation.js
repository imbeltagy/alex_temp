// FOR VALIDATION;
const inputType = {
  text: true,
  email: true,
  textarea: true,
  number: true,
};
const selectOptions = {
  budget: ["0-1000", "1000-5000", "5000-10000", "10000-20000", "20000+"],
  region: [
    "africa",
    "asia",
    "europe",
    "austrlia",
    "north-america",
    "south-america",
  ],
  service: [
    "mobile-app-development",
    "ar-development",
    "vr-development",
    "web-development",
    "game-development",
    "enterprise-solutions",
    "startup-mvp",
    "other",
  ],
  "heared-about-us": [
    "google",
    "clutch",
    "people-per-hour",
    "goodfirms",
    "personal-reference",
    "social-media",
    "other",
  ],
};
const variableErrorMessages = {
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
const theForm = document.getElementById("contact-form");
const formInputs = theForm.querySelectorAll("input");
const formSelects = theForm.querySelectorAll("select");
const textarea = theForm.querySelector("textarea");
const allFields = [...formInputs, ...formSelects, textarea];

const validateInputs = (inputField) => {
  const fieldNames = [
    "name",
    "email",
    "contactNumber",
    "companyName",
    "message",
  ];
  const ourSelects = ["budget", "region", "service", "heared-about-us"];
  const { name, value, type } = inputField;

  if (type === "select-one") {
    const isNameValid = ourSelects.includes(name);
    const isValueValid = selectOptions[name].includes(value);

    return isNameValid && isValueValid;
  }

  const isNameValid = fieldNames.includes(name);
  const notEmpty = value.trim().length > 0;

  if (name === "email" && notEmpty) {
    return isEmailValid(value.trim());
  }
  if (name === "contactNumber" && notEmpty) {
    return !isNaN(+value);
  }
  return isNameValid && notEmpty;
};

// ON SUBMIT VALIDATION
theForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const errorsList = {};

  allFields.forEach((field) => {
    const passed = validateInputs(field);
    if (!passed) {
      errorsList[field.name] = true;
    }
  });

  const errorNodes = theForm.querySelectorAll("small");

  if (!Object.keys(errorsList).length) {
    theForm.submit();
  }
  Object.keys(errorsList).forEach((error) => {
    Array.from(errorNodes)
      .find((node) => {
        return node?.dataset?.inputname === error;
      })
      .classList.add("showError");
  });
});

//  LIVE VALIDATION
// NAME INPUT
formInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const errorHolder = input.nextElementSibling;
    if (input.name === "email" && !isEmailValid(input.value)) {
      errorHolder.textContent =
        input.value.length > 0
          ? variableErrorMessages.email.wrong
          : variableErrorMessages.email.empty;
      errorHolder.classList.add("showError");
      return;
    }
    if (input.name === "contactNumber") {
      errorHolder.textContent =
        input.value.length === 0
          ? variableErrorMessages.contactNumber.empty
          : input.value.length >= 10 && input.value.length <= 12
          ? ""
          : variableErrorMessages.contactNumber.short;
      errorHolder.classList.add("showError");
      return;
    }
    toggleErrors(!isEmpty(input), errorHolder);
  });
});
formSelects.forEach((select) => {
  select.addEventListener("change", () => {
    const errorHolder = select.nextElementSibling;
    toggleErrors(isSelectValid(select), errorHolder);
  });
});
textarea.addEventListener("keyup", () => {
  toggleErrors(!isEmpty(textarea), textarea.nextElementSibling);
});
const isEmpty = (field) => {
  return !(field.value.trim().length > 0);
};
const isEmailValid = (value) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(value);
};
const isSelectValid = (select) => {
  const { name, value } = select;
  return selectOptions[name].includes(value);
};

const toggleErrors = (check, errorHolder) => {
  if (check) {
    errorHolder.classList.remove("showError");
  } else {
    errorHolder.classList.add("showError");
  }
};
