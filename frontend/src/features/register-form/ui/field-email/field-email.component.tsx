import React from 'react';
import { Form, Input } from 'antd';
import { RULES } from './field-email.constants';

export const FieldEmail = React.memo(() => {
  return (
    <Form.Item
      data-testid="login-form__email"
      label="Адрес электронной почты"
      name="email"
      hasFeedback
      rules={RULES}
    >
      <Input data-testid="login-form__email-input" />
    </Form.Item>
  );
});
