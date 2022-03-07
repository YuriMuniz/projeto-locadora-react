import React, { useState, useEffect } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {
    Container, List, Item, HeaderItem,
    Footer, Description, IconGroup
} from './styles';

import ModalConfirmDelete from './ModalConfirmDelete';
import api from '../../services/api';



const User: React.FC = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [users, setUsers] = useState<IUser[]>();
    const [userSelectedId, setUserSelectedId] = useState<number>();

    useEffect(() => {
        async function fetch() {
            if (!isOpenModal) {
                try {
                    const res = await api.get<IUser[]>('users');
                    console.log(res.data);
                    setUsers(res.data);
                } catch (err) {
                    console.log(err);
                }
            }
        }
        fetch();
    }, [isOpenModal]);

    useEffect(() => {
        console.log(users);
    }, [users])

    const navigate = useNavigate();

    const handleModal = (id: number | undefined) => {
        setIsOpenModal(!isOpenModal);
        if (id) {
            setUserSelectedId(id);
        }
    }
    return (
        <Container>
            <button onClick={() => navigate('/users/create')}>Adicionar Usuário</button>
            <List>
                {users && users.map((user) => (
                    <Item key={user.id}>
                        <HeaderItem>
                            <h4>{user.name + ' - ' +user.email}</h4>
                            <IconGroup>
                                <button onClick={() => navigate('/users/edit/' + user.id)}><MdEdit /></button>
                                <button><MdDelete onClick={() => handleModal(user.id)} /></button>
                            </IconGroup>
                        </HeaderItem>
                       
                    </Item>
                ))}
            </List>
            <ModalConfirmDelete isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} id={userSelectedId} />
        </Container>
    );
}

export default User;