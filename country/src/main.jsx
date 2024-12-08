import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { CountryProvider } from './context/CountryContext';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <CountryProvider>
                <App />
            </CountryProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
