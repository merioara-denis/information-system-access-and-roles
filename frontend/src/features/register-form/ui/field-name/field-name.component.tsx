import React from 'react';
import { Form, Input } from 'antd';
import { RULES } from './field-name.constants';

export const FieldName = React.memo(() => {
  return (
    <Form.Item
      data-testid="login-form__name"
      label="Имя"
      name="name"
      hasFeedback
      rules={RULES}
    >
      <Input data-testid="login-form__name-input" />
    </Form.Item>
  );
});
