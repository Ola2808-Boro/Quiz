import React from 'react';
import { StyledHeader } from './Header.styles';
import HeaderText from 'components/molecules/HeaderText/HeaderText';

const Header = () => {
    return (
        <StyledHeader>
            <HeaderText/>
        </StyledHeader>
    );
};



export default Header;