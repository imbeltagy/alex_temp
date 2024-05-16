const backdrop = document.querySelector(".modal__backdrop");
const closeModalButton = document.querySelector(".callModalClose");
const callModal = document.querySelector(".callModal");
const callModalForm = callModal.querySelector("form");
const formInputsModal = callModal.querySelectorAll("input");
const formSelectsModal = callModal.querySelectorAll("select");
const allFieldsModal = [...formInputsModal, ...formSelectsModal];
const variableErrorMessagesModal = {
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
const selectOptionsModal = {
  "modal-region": [
    "africa",
    "asia",
    "europe",
    "austrlia",
    "north-america",
    "south-america",
  ],
  "modal-services": [
    "mobile-app-development",
    "ar-development",
    "vr-development",
    "web-development",
    "game-development",
    "enterprise-solutions",
    "startup-mvp",
    "other",
  ],
};
const closeModal = () => {
  callModal.classList.remove("showModal");
};

backdrop.addEventListener("click", closeModal);
closeModalButton.addEventListener("click", closeModal);

// VALIDATE MODAL
const isEmptyModal = (field) => {
  return !(field.value.trim().length > 0);
};
const isEmailValidModal = (value) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(value);
};
const isSelectValidModal = (select) => {
  const { name, value } = select;
  return selectOptionsModal[name].includes(value);
};

const toggleErrorsModal = (check, errorHolder) => {
  if (check) {
    errorHolder.classList.remove("showError");
  } else {
    errorHolder.classList.add("showError");
  }
};
const validateInputsModal = (inputField) => {
  const fieldNames = ["modal-fullName", "modal-email", "modal-contact"];
  const ourSelects = ["modal-region", "modal-services"];
  const { name, value, type } = inputField;

  if (type === "select-one") {
    const isNameValid = ourSelects.includes(name);
    const isValueValid = selectOptionsModal[name].includes(value);

    return isNameValid && isValueValid;
  }

  const isNameValid = fieldNames.includes(name);
  const notEmpty = value.trim().length > 0;

  if (name === "email" && notEmpty) {
    return isEmailValidModal(value.trim());
  }
  if (name === "contactNumber" && notEmpty) {
    return !isNaN(+value);
  }
  return isNameValid && notEmpty;
};

callModalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const errorsList = {};
  allFieldsModal.forEach((field) => {
    const passed = validateInputsModal(field);
    if (!passed) {
      errorsList[field.name] = true;
    }
  });

  const errorNodes = callModalForm.querySelectorAll("small");

  if (!Object.keys(errorsList).length) {
    callModalForm.submit();
  }
  Object.keys(errorsList).forEach((error) => {
    Array.from(errorNodes)
      .find((node) => {
        return node?.dataset?.inputname === error;
      })
      ?.classList.add("showError");
  });
});

formInputsModal.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const errorHolder = input.nextElementSibling;
    if (input.name === "modal-email" && !isEmailValidModal(input.value)) {
      errorHolder.textContent =
        input.value.length > 0
          ? variableErrorMessagesModal.email.wrong
          : variableErrorMessagesModal.email.empty;
      errorHolder.classList.add("showError");
      return;
    }
    if (input.name === "modal-contact") {
      errorHolder.textContent =
        input.value.length === 0
          ? variableErrorMessagesModal.contactNumber.empty
          : input.value.length >= 10 && input.value.length <= 12
          ? ""
          : variableErrorMessagesModal.contactNumber.short;
      errorHolder.classList.add("showError");
      return;
    }
    toggleErrorsModal(!isEmptyModal(input), errorHolder);
  });
});
formSelectsModal.forEach((select) => {
  select.addEventListener("change", () => {
    const errorHolder = select.nextElementSibling;
    toggleErrorsModal(isSelectValidModal(select), errorHolder);
  });
});

const openTheModalElements = document.querySelectorAll(".triggerModelOpen");
openTheModalElements?.forEach((elem) => {
  elem.addEventListener("click", () => {
    callModal.classList.add("showModal");
  });
});
