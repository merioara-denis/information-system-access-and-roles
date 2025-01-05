import { RegisterFormProps } from '../../register-form.types';

export type UseHandleSubmitClickArgs = Pick<RegisterFormProps, 'onFormSubmit'>;

export type UseHandleSubmitClickResult = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export type UseHandleSubmitClick = (
  args: UseHandleSubmitClickArgs
) => UseHandleSubmitClickResult;
