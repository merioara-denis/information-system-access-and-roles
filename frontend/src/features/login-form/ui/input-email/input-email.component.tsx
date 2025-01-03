import React from 'react';

export const InputEmail = React.memo(() => {
  return (
    <div>
      <input
        id="login-form__email"
        data-testid="login-form__email-input"
        type="email"
        name="email"
        formNoValidate
      />
    </div>
  );
});
