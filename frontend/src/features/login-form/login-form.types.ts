export type LoginFormData = {
  email: string;
  phone: string;
  password: string;
  name: string;
};

export type LoginFormProps = {
  onFormSubmit: (data: LoginFormData) => void;
  onForgotPasswordClick: VoidFunction;
  onRegisterClick: VoidFunction;
};
