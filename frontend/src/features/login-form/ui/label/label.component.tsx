import React from 'react';
import type { LabelProps } from './label.types';

export const Label = React.memo<LabelProps>((props) => {
  const { name, title } = props;

  return (
    <div>
      <label
        htmlFor={`login-form__${name}`}
        data-testid={`login-form__${name}-label`}
      >
        {title}
      </label>
    </div>
  );
});
