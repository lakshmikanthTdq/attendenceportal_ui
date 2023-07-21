import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary'
import { ConfigProvider } from 'antd';
import { store } from './store'
import { Provider } from 'react-redux'
import PageNotFound from './pages/PageNotFound/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#1a2b6d',
      }}}>
      <Provider store={store}>
        <ErrorBoundary FallbackComponent={PageNotFound}>
          <App />
        </ErrorBoundary>
      </Provider>
    </ConfigProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
