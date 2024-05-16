const attachButton = document.getElementById("attachButton");
const fileInput = document.querySelector("input[type=file]");
const subfile = document.getElementById("subfile");
const allowedTypes = ["jpeg", "png", "doc", "pdf"];
const allowedSize = 1024 * 10 ** 3;
const attachErrMsg = document.getElementById("attachErrorMsg");

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

const isAttachValid = () => {
  const { type, size } = fileInput?.files[0] || { type: "", size: 0 };
  const isTypeValid = allowedTypes.includes(type.split("/")[1]);
  const isSizeValid = size / 10 ** 6 / allowedSize < 1;
  return isTypeValid && isSizeValid;
};
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
    "attach",
  ];
  const ourSelects = ["budget", "region", "service", "heared-about-us"];
  const { name, value, type } = inputField;

  if (type === "select-one") {
    const isNameValid = ourSelects.includes(name);
    const isValueValid = selectOptions[name].includes(value);

    return isNameValid && isValueValid;
  }
  if (type === "file") {
    return isAttachValid();
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
    if (field.name === "placeholder") return;
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
      ?.classList.add("showError");
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

attachButton.addEventListener("click", () => {
  fileInput.click();
});
fileInput.addEventListener("change", () => {
  subfile.placeholder = fileInput.value;
  toggleErrors(isAttachValid(), attachErrMsg);
});

const locationTabs = document.querySelectorAll(".location-tab");
const mapsContainer = document.querySelector(".locations__maps");
locationTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const location = tab.dataset.location;
    const currentActiveMap = mapsContainer.querySelector(
      ".locations__map-active"
    );
    const reqMap = mapsContainer.querySelector(`.${location}`);

    currentActiveMap.classList.remove("locations__map-active");
    reqMap.classList.add("locations__map-active");
  });
});

const scheduleAMeeting = document.getElementById("schedule-a-meeting");
scheduleAMeeting.addEventListener("click", () => {
  callModal?.classList.add("showModal");
});
