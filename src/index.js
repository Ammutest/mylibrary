import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';

export { default as InputText } from './InputText';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InputNumber/>
    <InputText/>
    <InputCheckbox/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

