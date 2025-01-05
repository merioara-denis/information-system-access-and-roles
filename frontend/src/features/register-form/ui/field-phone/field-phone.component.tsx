import React from 'react';
import { Form, Input } from 'antd';
import { RULES } from './field-phone.constants';

export const FieldPhone = React.memo(() => {
  return (
    <Form.Item
      data-testid="login-form__phone"
      label="Номер телефона"
      name="phone"
      hasFeedback
      rules={RULES}
    >
      <Input data-testid="login-form__phone-input" type="tel" />
    </Form.Item>
  );
});
