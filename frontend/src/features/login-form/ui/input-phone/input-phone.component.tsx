import React from 'react';

export const InputPhone = React.memo(() => {
  return (
    <div>
      <input
        id="login-form__phone"
        data-testid="login-form__phone-input"
        type="tel"
        name="phone"
        formNoValidate
      />
    </div>
  );
});
