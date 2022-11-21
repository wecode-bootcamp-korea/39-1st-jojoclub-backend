const validateEmail = (email) => {
  const re = new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  );

  if (!re.test(email)) {
    const err = new Error("invalid email");
    err.statusCode = 400;
    throw err;
  }
};

const validatePw = (password) => {
  const pwValidation = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/
  );
  if (!pwValidation.test(password)) {
    const err = new Error("PASSWORD_IS_NOT_VALID");
    err.statusCode = 409;
    throw err;
  }
};

module.exports = { validateEmail, validatePw };
