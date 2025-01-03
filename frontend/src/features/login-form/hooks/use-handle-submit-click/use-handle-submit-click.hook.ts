import React from 'react';
import type { UseHandleSubmitClick } from './use-handle-submit-click.types';
import type { LoginFormData } from '../../login-form.types';

export const useHandleSubmitClick: UseHandleSubmitClick = (args) => {
  const { onFormSubmit } = args;
  const onFormSubmitRef = React.useRef(onFormSubmit);

  React.useImperativeHandle(onFormSubmitRef, () => onFormSubmit, [
    onFormSubmit,
  ]);

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.target as HTMLFormElement);
      const mapData = new Map(Array.from(formData?.entries?.()));
      const objectData = Object.fromEntries(mapData) as LoginFormData;

      onFormSubmitRef.current(objectData);
    },
    []
  );

  return { handleSubmit };
};
