export const ValidateEmail = () => {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

export const ValidatePassword = () => {
  return (/^[a-zA-Z0-9!@#$%^&*]{6,12}$/);
};

export const ValidateName = () => {
  return (/^[a-zA-Z ]+$/);
};

export const ValidateNumber = () => {
  return (/^[789]\d{8}$/);
};


