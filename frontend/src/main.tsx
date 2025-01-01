import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reactLogo from './assets/react.svg';
import * as Features from './features';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p>Frontend</p>
    <Features.RegisterForm />
    <Features.LoginForm />
    <Features.ForgotPasswordForm />
    <img src={reactLogo} className="logo react" alt="React logo" />
  </StrictMode>
);
