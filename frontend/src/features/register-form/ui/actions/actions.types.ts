import { RegisterFormProps } from '../../register-form.types';

export type ActionsProps = Pick<
  RegisterFormProps,
  'loginUrl' | 'onLoginClick'
> & { isProcess: boolean };
