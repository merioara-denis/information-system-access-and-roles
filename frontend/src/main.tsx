import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import reactLogo from './assets/react.svg';
import * as Features from './features';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider>
      <p>Frontend</p>
      <Features.RegisterForm
        onFormSubmit={() => {
          return Promise.resolve({
            content: {
              mode: 'message' as ApiNotificationMode,
            },
          });
        }}
        loginUrl="http://domain.org/login-page"
        onLoginClick={console.log}
      />
      <Features.LoginForm />
      <Features.ForgotPasswordForm />
      <img src={reactLogo} className="logo react" alt="React logo" />
    </ConfigProvider>
  </StrictMode>
);
