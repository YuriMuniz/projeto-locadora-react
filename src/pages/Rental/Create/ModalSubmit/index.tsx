import React, { useState } from 'react';

import { Container, Header, Content, Footer } from './styles';
import { Dispatch, SetStateAction } from "react";
import { MdClose } from 'react-icons/md';
import api from '../../../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';



interface IPayloadMovieId {
    id: number
}

interface ModalSubmit {
    isOpenModal: boolean;
    setIsOpenModal: Dispatch<SetStateAction<boolean>>;
    idUser: string | undefined;
    idsMovies: number[];
}

const ModalSubmit: React.FC<ModalSubmit> = ({
    isOpenModal, setIsOpenModal,
    idUser, idsMovies }) => {
    const [returnDate, setReturnDate] = useState<string>();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!returnDate) return toast.error('Necessário escolher uma data.');
        if (!idUser) return toast.error('Nenhum usuário selecionado');
        let movies: IPayloadMovieId[] = [];

        for (let item of idsMovies) {
            movies.push({ id: item });
        }

        const payload = {
            user: {
                id: parseInt(idUser)
            },
            movies,
            returnDate: format(new Date(returnDate), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
            isRenewed: false
        }

        await api.post('rentals/create', payload)
            .then(function (result) {
                navigate(-1);
            })
            .catch(function (err) {
                if (err.response.data.message) {
                    toast.error(err.response.data.message);
                }
                if (err.response.data.fieldErrors) {
                    err.response.data.fieldErrors.map((item: any) => {
                        console.log(item);
                        toast.error(item);
                    })
                }
            });
    }
    return (
        <Container isOpenModal={isOpenModal}>
            <Header>
                <h4>Confirmação</h4>
                <button onClick={() => setIsOpenModal(!isOpenModal)}><MdClose /></button>
            </Header>
            <Content>
                <span>Selecione a data de retorno</span>
                <input type="date" onChange={(event) => setReturnDate(event.target.value)} />
            </Content>
            <Footer>
                <button onClick={() => handleSubmit()}>Finalizar</button>
            </Footer>


        </Container>
    );
}

export default ModalSubmit;