import { LoginFormProps } from '../../login-form.types';

export type UseHandleSubmitClickArgs = Pick<LoginFormProps, 'onFormSubmit'>;

export type UseHandleSubmitClickResult = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export type UseHandleSubmitClick = (
  args: UseHandleSubmitClickArgs
) => UseHandleSubmitClickResult;
