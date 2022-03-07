import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { Header } from '../../_layouts/Default/styles'
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { format } from 'date-fns';

interface IUserProps {
    name: string;
    email: string;
    cpf: string;
    birthDate: string;
}

const Create: React.FC = () => {
    const initialInfoState = {
        name: "",
        email: "",
        cpf: "",
        birthDate: ""
    };

    const [user, setUser] = useState<IUserProps>(initialInfoState);

    const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string().required("O e-mail é obrigatório"),
        cpf: Yup.string().required("O cpf é obrigatório"),
        birthDate: Yup.string().required("A data de nascimento é obrigatória"),
    });
    const navigate = useNavigate();


    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await schema.validate(user);
        } catch (err: any) {
            toast.error(err.toString());
            return;
        }

        const userRequest = {
            name: user.name,
            email: user.email,
            cpf: user.cpf,
            birthDate: format(new Date(user.birthDate), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
        }

        await api.post<IUserProps>('users/create', userRequest)
            .then(function (result) {
                toast.success('Usuário ' + result.data.name + ' adicionado com sucesso.');
                setUser(initialInfoState);
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
        <Container>
            <Header>
                <button onClick={() => navigate(-1)}><MdArrowBack /></button>
                <h3>Adicionar Usuário</h3>
            </Header>
            <input name="name" placeholder='Nome' onChange={handleInputChange} value={user.name} />
            <input name="email" placeholder='Email' onChange={handleInputChange} value={user.email} />
            <input name="cpf" placeholder='CPF' onChange={handleInputChange} value={user.cpf} />
            <input type="date" name="birthDate" placeholder='Data de Nascimento' onChange={handleInputChange} value={user.birthDate} />
            <button onClick={() => handleSubmit()}>Adicionar</button>
        </Container>
    );
}

export default Create;