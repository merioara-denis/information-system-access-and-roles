import React from 'react';
import * as Hooks from './hooks';
import * as UI from './ui';
import type { LoginFormProps } from './login-form.types';

export const LoginForm = React.memo<LoginFormProps>((props) => {
  const { onFormSubmit } = props;
  const { handleSubmit } = Hooks.useHandleSubmitClick({ onFormSubmit });

  return (
    <form data-testid="login-form" onSubmit={handleSubmit} noValidate>
      <div>
        <UI.Label name="email" title="Адрес электронной почты" />
        <UI.InputEmail />
      </div>
      <div>
        <UI.Label name="phone" title="Номер телефона" />
        <UI.InputPhone />
      </div>
      <div>
        <UI.Label name="password" title="Пароль" />
        <UI.InputPassword />
      </div>
      <div>
        <UI.Label name="name" title="Имя" />
        <UI.InputName />
      </div>
      <UI.Actions />
    </form>
  );
});
