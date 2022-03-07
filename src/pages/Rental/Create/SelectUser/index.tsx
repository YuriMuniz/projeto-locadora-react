import React, { useEffect, useState } from 'react';

import { Container, List, Item } from './styles';
import api from '../../../../services/api';
import { MdArrowBack, MdDone } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../_layouts/Default/styles';


const Create: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetch() {
            try {
                const res = await api.get<IUser[]>('users');
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }

        }
        fetch();
    }, [])

    return (
        <Container>
            <Header>
                <button onClick={() => navigate(-1)}><MdArrowBack /></button>
                <h3>Nova Locação</h3>

            </Header>
            <input type="tex" placeholder='Busque pelo nome' />
            <List>
                {users && users.map((user) => (
                    <Item key={user.id}>
                        <h4>{user.name + ' - ' + user.email}</h4>
                        <button onClick={() => navigate('/rentals/select-movies/' + user.id)}>Selecionar <MdDone /></button>
                    </Item>
                ))}
            </List>

        </Container>
    );
}

export default Create;