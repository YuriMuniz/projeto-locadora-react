import React, { useState } from 'react';

import { Container, Content, Group } from './styles';
import { MdMenu } from 'react-icons/md';
import Menu from '../Menu';

const Header: React.FC = () => {
    const [isExpand, setIsExpand] = useState(false);

    return (
        <Container>
            <Content>
                <Group>
                    <button onClick={() => setIsExpand(!isExpand)}><MdMenu /></button>
                    <h2>Locadora Filmes</h2>
                </Group>
            </Content>
            <Menu isExpand={isExpand} />
        </Container>
    );
}

export default Header;