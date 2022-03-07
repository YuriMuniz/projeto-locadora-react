import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, OutletContainer } from './styles';
import Header from '../../../components/Header';

const LayoutDefault: React.FC = () => {
    return (
        <Container>
            <Header />
            <OutletContainer>
                <Outlet />
            </OutletContainer>
        </Container>
    );
}

export default LayoutDefault;