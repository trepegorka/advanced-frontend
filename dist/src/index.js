import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./app/providers/ThemeProvider";
var root = createRoot(document.getElementById('root'));
root.render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }) }));
