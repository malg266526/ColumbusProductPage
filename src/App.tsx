import React from 'react';
import { Header } from './modules/header/Header';
import { NavMenu } from './modules/navigation/Menu';
import { Main } from './modules/main';
import { Footer } from './modules/footer';
import { Hidden } from '@material-ui/core';

function App() {
    return (
        <div>
            <Header />
            <Hidden smDown>
                <NavMenu />
            </Hidden>
            <Main />
            <Footer />
        </div>
    );
}

export default App;
