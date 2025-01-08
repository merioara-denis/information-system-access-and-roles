export type RegisterFormData = {
  email: string;
  phone: string;
  password: string;
  name: string;
};

export type RegisterFormProps = {
  /** Обработчик отправки формы */
  onFormSubmit: (data: RegisterFormData) => Promise<ApiSuccessResponse>;
  /** Адрес страницы авторизации */
  loginUrl: string;
  /** Обработчик перехода на страницу авторизации */
  onLoginClick: VoidFunction;
};
