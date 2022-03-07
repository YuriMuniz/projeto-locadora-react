import React, { useState } from 'react';

import { Container, Header, Content, Footer } from './styles';
import { Dispatch, SetStateAction } from "react";
import { MdClose } from 'react-icons/md';
import api from '../../../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';



interface ModalRenewedSubmit {
    isOpenModal: boolean;
    setIsOpenModal: Dispatch<SetStateAction<boolean>>;
    idRental: number;
}

const ModalRenewedSubmit: React.FC<ModalRenewedSubmit> = ({
    isOpenModal, setIsOpenModal,
    idRental }) => {
    const [returnDate, setReturnDate] = useState<string>();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!returnDate) return toast.error('Necessário escolher uma data.');
        if (!idRental) return toast.error('Nenhuma locação selecionada');
    
        await api.post('rentals/renewed/'+idRental, {returnDate: format(new Date(returnDate), "dd/MM/yyyy").toString()})
            .then(function (result) {
                setIsOpenModal(false);
                toast.success("Aluguel renovado.");
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
                <h4>Renovação</h4>
                <button onClick={() => setIsOpenModal(!isOpenModal)}><MdClose /></button>
            </Header>
            <Content>
                <span>Selecione a nova data de retorno</span>
                <input type="date" onChange={(event) => setReturnDate(event.target.value)} />
            </Content>
            <Footer>
                <button onClick={() => handleSubmit()}>Finalizar</button>
            </Footer>


        </Container>
    );
}

export default ModalRenewedSubmit;