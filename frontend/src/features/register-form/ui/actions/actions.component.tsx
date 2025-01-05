/* eslint-disable max-lines-per-function */
import React from 'react';
import { Button, Flex, Form, Typography } from 'antd';
import * as Hooks from './hooks';
import { ActionsProps } from './actions.types';

export const Actions = React.memo<ActionsProps>((props) => {
  const { loginUrl } = props;
  const { handleLinkToLoginClick } = Hooks.useHandleLinkToLoginClick(props);

  return (
    <Form.Item>
      <Flex justify="space-between" align="center">
        <Typography.Link
          data-testid="login-form__link-to-login"
          href={loginUrl}
          onClick={handleLinkToLoginClick}
        >
          Go to login
        </Typography.Link>
        <Flex gap="small" justify="flex-end">
          <Button
            data-testid="login-form__reset-button"
            danger
            htmlType="reset"
          >
            Сбросить
          </Button>
          <Button
            data-testid="login-form__submit-button"
            type="primary"
            htmlType="submit"
          >
            Отправить
          </Button>
        </Flex>
      </Flex>
    </Form.Item>
  );
});
