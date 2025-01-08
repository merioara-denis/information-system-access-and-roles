/* eslint-disable max-lines */
import _ from 'lodash';
import { faker } from '@faker-js/faker';
import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { fn, expect, userEvent, waitFor, within } from '@storybook/test';
import type { RegisterFormData } from './register-form.types';

import { RegisterForm } from './register-form.component';
import { PlayFunction } from 'storybook/internal/types';

const meta = {
  title: 'Features/RegisterForm',
  component: RegisterForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onFormSubmit: fn(),
    loginUrl: faker.internet.url(),
    onLoginClick: fn().mockImplementation(
      (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.preventDefault();
      }
    ),
  },
} satisfies Meta<typeof RegisterForm>;

export default meta;

type Story = StoryObj<typeof meta>;

const createMock = (): RegisterFormData => ({
  email: faker.internet.email(),
  name: faker.person.fullName(),
  password: faker.internet.password(),
  phone: faker.phone.number({ style: 'international' }),
});

const fillFields = async (
  canvas: ReturnType<typeof within>,
  data: RegisterFormData
) => {
  for (const [field, value] of Object.entries(data)) {
    await userEvent.type(
      canvas.getByTestId(`login-form__${field}-input`),
      value
    );
  }
};

const submitTest: PlayFunction<
  ReactRenderer,
  {
    onFormSubmit: typeof fn;
    loginUrl: string;
    onLoginClick: typeof fn;
  }
> = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const mock = createMock();

  await fillFields(canvas, mock);

  userEvent.click(canvas.getByTestId('login-form__submit-button'));

  await waitFor(() => expect(args.onFormSubmit).toHaveBeenCalledWith(mock));
};

export const SubmitSuccess: Story = {
  args: {
    onFormSubmit: fn(() => {
      return new Promise<ApiSuccessResponse>((...args) => {
        const [resolve] = args;

        _.debounce(() => {
          resolve({
            content: {
              mode: 'message' as ApiNotificationMode,
              body: 'Пользователь успешно зарегистрирован',
            },
          });
        }, 1000)();
      });
    }),
  },
  play: submitTest,
};

export const SubmitFail: Story = {
  args: {
    onFormSubmit: fn(() => {
      return new Promise<ApiSuccessResponse>((...args) => {
        const [, reject] = args;

        _.debounce(() => {
          reject({
            content: {
              mode: 'message' as ApiNotificationMode,
              body: 'Пользователь успешно зарегистрирован',
            },
          });
        }, 1000)();
      });
    }),
  },
  play: submitTest,
};

export const Reset: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const mock = createMock();

    await fillFields(canvas, mock);

    userEvent.click(canvas.getByTestId('login-form__reset-button'));

    await waitFor(() => {
      for (const [field] of Object.entries(mock)) {
        expect(
          canvas.getByTestId<HTMLInputElement>(`login-form__${field}-input`)
            .value
        ).toEqual('');
      }
    });
  },
};

export const LinkToLogin: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const href = canvas
      .getByTestId<HTMLAnchorElement>('login-form__link-to-login')
      .getAttribute('href');

    expect(href).toEqual(args.loginUrl);

    userEvent.click(canvas.getByTestId('login-form__link-to-login'));

    await waitFor(() => expect(args.onLoginClick).toHaveBeenCalled());
  },
};
