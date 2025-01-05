import React from 'react';
import {
  UseHandleLinkToLoginClick,
  HandleLinkToLoginClickEvent,
} from './use-handle-link-to-login-click.types';

export const useHandleLinkToLoginClick: UseHandleLinkToLoginClick = (args) => {
  const { onLoginClick } = args;
  const onLoginClickRef = React.useRef(onLoginClick);

  React.useImperativeHandle(onLoginClickRef, () => onLoginClick, [
    onLoginClick,
  ]);

  const handleLinkToLoginClick = React.useCallback(
    (event: HandleLinkToLoginClickEvent) => {
      event.preventDefault();
      onLoginClickRef.current();
    },
    []
  );

  return { handleLinkToLoginClick };
};
