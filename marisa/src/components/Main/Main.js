import React from 'react';
import './Main.css';
import MainTop from '../MainTop/MainTop';
import MainBottom from '../MainBottom/MainBottom';

function Main({ onAddCake }) {
    return (
        <main className='main'>
            <MainTop />
            <MainBottom onAddCake={onAddCake} />
        </main>
    );
}

export default Main;
