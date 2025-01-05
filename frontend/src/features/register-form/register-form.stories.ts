/* eslint-disable max-lines */
import { faker } from '@faker-js/faker';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import type { RegisterFormData } from './register-form.types';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { RegisterForm } from './register-form.component';

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

export const Submit: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const mock = createMock();

    await fillFields(canvas, mock);

    userEvent.click(canvas.getByTestId('login-form__submit-button'));

    await waitFor(() => expect(args.onFormSubmit).toHaveBeenCalledWith(mock));
  },
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
