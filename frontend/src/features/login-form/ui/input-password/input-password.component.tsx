import React from 'react';

export const InputPassword = React.memo(() => {
  return (
    <div>
      <input
        id="login-form__password"
        data-testid="login-form__password-input"
        type="password"
        name="password"
        formNoValidate
      />
    </div>
  );
});
