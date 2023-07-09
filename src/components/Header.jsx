import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <>
            <div id="header">
                <div className="inner">
                    <h1>세상의 모든 서재</h1>
                </div>
            </div>
            <Navigation />

        </>
    );
};

export default Header;