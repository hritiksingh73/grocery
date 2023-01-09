export const EmailValid = () => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/);
};

export const PasswordValid = () => {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
};

export const NameValid = () => {
    return (/[a-zA-Z][a-zA-Z ]*/);
};

export const PhoneValid = () => {
    return (/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/);
};