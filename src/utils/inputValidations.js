export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'Name',
  validation: {
    required: {
      value: true,
      message: 'Name is required',
    },
    minLength: {
      value: 2,
      message: '2 characters min',
    },
    maxLength: {
      value: 16,
      message: '16 characters max',
    },
  },
};

export const email_validation = {
  name: 'email',
  label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'Email',
  validation: {
    required: {
      value: true,
      message: 'Email is required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Enter a valid Email',
    },
  },
};

export const password_validation = {
  name: 'password',
  label: 'password',
  // type: 'password',
  id: 'password',
  placeholder: 'Password',
  validation: {
    required: {
      value: true,
      message: 'Password is required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
    maxLength: {
      value: 16,
      message: 'max 16 characters',
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/,
      message:
        'Password should contain at least six characters, one uppercase letter, one lowercase letter and one number',
    },
  },
};

export const confirm_password_validation = {
  name: 'confirmPassword',
  label: 'password',
  // type: 'password',
  id: 'confirmPassword',
  placeholder: 'Confirm password',
  validation: {
    required: {
      value: true,
      message: 'Password confirmation is required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
    maxLength: {
      value: 16,
      message: 'max 16 characters',
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/,
      message:
        'Password should contain at least six characters, one uppercase letter, one lowercase letter and one number',
    },
  },
};
