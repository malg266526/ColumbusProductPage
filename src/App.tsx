import React from 'react';
import { Header } from './modules/header/Header';
import { NavMenu } from './modules/navigation/Menu';
import { Main } from './modules/main';

function App() {
    return (
        <div>
            <Header />
            <NavMenu />
            <Main />
        </div>
    );
}

export default App;
