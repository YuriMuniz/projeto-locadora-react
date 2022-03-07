import React, { useEffect, useState } from 'react';

import { Container, Header, Content, Footer } from './styles';
import { Dispatch, SetStateAction } from "react";
import { MdClose, MdFileCopy } from 'react-icons/md';
import api from '../../../services/api';
import { toast } from 'react-toastify';

interface ModalConfirmDelete {
    isOpenModal: boolean;
    setIsOpenModal: Dispatch<SetStateAction<boolean>>;
    id?: number;
}

const ModalConfirmDelete: React.FC<ModalConfirmDelete> = ({ isOpenModal, setIsOpenModal, id }) => {

    const [user, setUser] = useState<IUser>();

    useEffect(()=>{
        async function fetch(){
            if(id){
                try {
                    const res = await api.get('users/'+id);
                    setUser(res.data);      
                } catch (err: any) {
                    console.log(err);
                    toast.error(err.toString());
                }
            }
            
        }
        fetch();
        
    },[id])

    const handleSubmit = async () => {
        try {
            await api.put('users/delete', user);
            toast.success("Filme removido.");
            setIsOpenModal(false);
        } catch (err: any) {
            console.log(err);
            toast.error(err.toString());
        }
    }
    return (
        <Container isOpenModal={isOpenModal}>
            <Header>
                <h4>Tem certeza?</h4>
                <button onClick={() => setIsOpenModal(!isOpenModal)}><MdClose /></button>
            </Header>
            <Content>
                <span>Você tem certeza que deseja apagar o usuário {user?.email}?</span>
            </Content>
            <Footer>
                <button onClick={() => handleSubmit()}>Sim</button>
                <button className="no" onClick={() => setIsOpenModal(!isOpenModal)}>Não</button>
            </Footer>


        </Container>
    );
}

export default ModalConfirmDelete;