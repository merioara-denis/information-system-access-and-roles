import React from 'react';
import { Form } from 'antd';
import * as UI from './ui';
import type {
  RegisterFormProps,
  RegisterFormData,
} from './register-form.types';

export const RegisterForm = React.memo<RegisterFormProps>((props) => {
  const { onFormSubmit, loginUrl, onLoginClick } = props;

  return (
    <Form<RegisterFormData>
      data-testid="login-form"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      style={{ width: 600, maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFormSubmit}
      onFinishFailed={console.log}
      autoComplete="off"
      layout="vertical"
    >
      <UI.FieldEmail />
      <UI.FieldPhone />
      <UI.FieldPassword />
      <UI.FieldName />
      <UI.Actions loginUrl={loginUrl} onLoginClick={onLoginClick} />
    </Form>
  );
});
