import React from 'react';
import { Form, Input } from 'antd';
import { RULES } from './field-password.constants';

export const FieldPassword = React.memo(() => {
  return (
    <Form.Item
      data-testid="login-form__password"
      label="Пароль"
      name="password"
      hasFeedback
      rules={RULES}
    >
      <Input.Password data-testid="login-form__password-input" />
    </Form.Item>
  );
});
