/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

declare interface Element {
  'data-testid'?: string;
}

// TODO: Временное решение для разработки

/** Тип отображения */
declare enum ApiNotificationMode {
  Message = 'message',
  Notification = 'notification',
  Toast = 'toast',
}

/** Ответ с ошибкой (REST API) */
declare interface ApiErrorResponse {
  /** Уникальный идентификатор */
  traceId: string;
  /** Системное описание ошибки */
  description: string;
  /** Сообщение для пользователя */
  content: {
    /** Тип отображения */
    mode: ApiNotificationMode;
    /** Значения для заполнения */
    data?: any;
    /** Заголовок сообщения */
    header?: string;
    /** Тело сообщения */
    body?: string;
    /** Подвал сообщения */
    footer?: string;
  };
}

/** Ответ об успешном выполнение (REST API) */
declare interface ApiSuccessResponse {
  /** Сообщение для пользователя */
  content: {
    /** Тип отображения */
    mode: ApiNotificationMode;
    /** Значения для заполнения */
    data?: any;
    /** Заголовок сообщения */
    header?: string;
    /** Тело сообщения */
    body?: string;
    /** Подвал сообщения */
    footer?: string;
  };
}
