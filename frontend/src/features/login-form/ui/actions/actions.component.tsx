import React from 'react';

export const Actions = React.memo(() => {
  return (
    <div>
      <div>
        <button type="reset" data-testid="login-form__reset-button">
          Сбросить
        </button>
      </div>
      <div>
        <button type="submit" data-testid="login-form__submit-button">
          Отправить
        </button>
      </div>
    </div>
  );
});
