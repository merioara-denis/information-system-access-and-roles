import React from 'react';

export const InputName = React.memo(() => {
  return (
    <div>
      <input
        id="login-form__name"
        data-testid="login-form__name-input"
        type="text"
        name="name"
        formNoValidate
      />
    </div>
  );
});
