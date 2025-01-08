import React from 'react';
import { message } from 'antd';
import type { UseHandleSubmitClick } from './use-handle-submit-click.types';
import type { RegisterFormData } from '../../register-form.types';

export const useHandleSubmitClick: UseHandleSubmitClick = (args) => {
  const { onFormSubmit } = args;
  const [isProcess, setIsProcess] = React.useState(false);
  const onFormSubmitRef = React.useRef(onFormSubmit);

  React.useImperativeHandle(onFormSubmitRef, () => onFormSubmit, [
    onFormSubmit,
  ]);

  const handleSubmit = React.useCallback((values: RegisterFormData) => {
    setIsProcess(true);
    const promise = onFormSubmitRef.current(values);

    promise
      .then((data) => {
        // TODO: Необходимо заменить на конструктор сообщения
        console.debug(data);
        message.success('Success !');
      })
      // TODO: Необходимо заменить на конструктор ошибки
      .catch((error: ApiErrorResponse) => {
        // TODO: Необходимо заменить на конструктор сообщения
        console.debug(error);
        message.error('Error !');
      })
      .finally(() => {
        setIsProcess(false);
      });
  }, []);

  return { isProcess, handleSubmit };
};
