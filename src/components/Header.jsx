import React from 'react';
import Navigation from './Navigation';
import { HeaderContainer } from '../styled/HeaderStyle';

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <div className="inner">
                    <h1>세상의 모든 서재</h1>
                </div>
            </HeaderContainer>
            <Navigation />

        </>
    );
};

export default Header;