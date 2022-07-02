import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const theme = {
        primary: '#322153',
        secondary: '#6c63ff',
        background: '#f0f0f5',
        text: '#6c6c80',
        white: '#fff',
    };

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">Render Home!</Route>
                    <Route path="/new"></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
