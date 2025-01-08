import React from 'react';
import { Form } from 'antd';
import * as UI from './ui';
import * as Hooks from './hooks';
import * as Constants from './register-form.constants';
import * as Types from './register-form.types';

export const RegisterForm = React.memo<Types.RegisterFormProps>((props) => {
  const { onFormSubmit, loginUrl, onLoginClick } = props;
  const { isProcess, handleSubmit } = Hooks.useHandleSubmitClick({
    onFormSubmit,
  });

  return (
    <Form<Types.RegisterFormData>
      {...Constants.defaultFormProps}
      data-testid="login-form"
      onFinish={handleSubmit}
      disabled={isProcess}
    >
      <UI.FieldEmail />
      <UI.FieldPhone />
      <UI.FieldPassword />
      <UI.FieldName />
      <UI.Actions
        isProcess={isProcess}
        loginUrl={loginUrl}
        onLoginClick={onLoginClick}
      />
    </Form>
  );
});
