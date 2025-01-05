import { ActionsProps } from '../../actions.types';

type UseHandleLinkToLoginClickArgs = Pick<ActionsProps, 'onLoginClick'>;

export type HandleLinkToLoginClickEvent = React.MouseEvent<
  HTMLElement,
  MouseEvent
>;

type UseHandleLinkToLoginClickResult = {
  handleLinkToLoginClick: (event: HandleLinkToLoginClickEvent) => void;
};

export type UseHandleLinkToLoginClick = (
  args: UseHandleLinkToLoginClickArgs
) => UseHandleLinkToLoginClickResult;
