import { faker } from '@faker-js/faker';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import type { LoginFormData } from './login-form.types';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { LoginForm } from './login-form.component';

const meta = {
  title: 'Features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onFormSubmit: fn(),
    onForgotPasswordClick: fn(),
    onRegisterClick: fn(),
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    onFormSubmit: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const mock: LoginFormData = {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password: faker.internet.password(),
      phone: faker.phone.number(),
    };

    for (const [field, value] of Object.entries(mock)) {
      await userEvent.type(
        canvas.getByTestId(`login-form__${field}-input`),
        value
      );
    }

    userEvent.click(canvas.getByTestId('login-form__submit-button'));

    await waitFor(() => expect(args.onFormSubmit).toHaveBeenCalledWith(mock));
  },
};
