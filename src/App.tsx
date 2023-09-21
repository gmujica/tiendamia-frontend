import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import { NotificationProvider } from './contex/notification.contex';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
