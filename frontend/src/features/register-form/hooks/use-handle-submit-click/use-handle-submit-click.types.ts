import { RegisterFormProps, RegisterFormData } from '../../register-form.types';

export type UseHandleSubmitClickArgs = Pick<RegisterFormProps, 'onFormSubmit'>;

export type UseHandleSubmitClickResult = {
  isProcess: boolean;
  handleSubmit: (values: RegisterFormData) => void;
};

export type UseHandleSubmitClick = (
  args: UseHandleSubmitClickArgs
) => UseHandleSubmitClickResult;
