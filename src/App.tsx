import React from 'react';
import { Header } from './modules/header/Header';
import { NavMenu } from './modules/navigation/Menu';
import { Main } from './modules/main';
import { Footer } from './modules/footer';

function App() {
    return (
        <div>
            <Header />
            <NavMenu />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
