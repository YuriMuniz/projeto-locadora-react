import React, { useEffect, useReducer, useState } from 'react';

import { Container } from './styles';
import { Header } from '../../_layouts/Default/styles'
import { MdArrowBack } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { format } from 'date-fns';

interface IUserProps {
    name: string;
    email: string;
    cpf: string;
    birthDate: string;

}
const Edit: React.FC = () => {
    const initialInfoState = {
        name: "",
        email: "",
        cpf: "",
        birthDate: "",
        id: undefined,
        gender: "",
        createdDate: undefined,
        updateDate: undefined,
        situation: undefined,
        userProfiles: undefined,
    };

    const { id } = useParams();
    const [user, setUser] = useState<IUser>(initialInfoState);
    const navigate = useNavigate();

    const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string().required("O e-mail é obrigatório"),
        cpf: Yup.string().required("O cpf é obrigatório"),
        birthDate: Yup.string().required("A data de nascimento é obrigatória"),
    });

    useEffect(() => {
        async function fetch() {
            try {
                const res = await api.get<IUser>('users/' + id);
                setUser(res.data);
                setUser(prevState => ({
                    ...prevState,
                    birthDate: res.data.birthDate.substring(0,10)
                }))
                
            } catch (err) {
                console.log(err);
                toast.error("Filme não encontrado.");
            }
        }
        fetch();
    }, [id])



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
            birthDate: format(new Date(user.birthDate), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
            id: user.id,
            gender: user.gender,
            createdDate: user.createdDate,
            updateDate: user.updateDate,
            situation: user.situation,
            userProfiles: user.userProfiles,
        }

        await api.put<IUser>('users/update', userRequest)
            .then(function (result) {
                toast.success('Usuário ' + result.data.name + ' alterado com sucesso.');
                
            })
            .catch(function (err) {
                console.log()
                if (err.response.data.fieldErrors) {
                    err.response.data.fieldErrors.map((item: any) => {
                        console.log(item);
                        toast.error(item);
                    })
                } else if (err.response.data.message) {
                    toast.error(err.response.data.message);
                }
            });
    }
    return (
        <Container>
            <Header>
                <button onClick={() => navigate(-1)}><MdArrowBack /></button>
                <h3>Editar Usuário</h3>
            </Header>
            <input name="name" placeholder='Nome' onChange={handleInputChange} value={user.name} />
            <input name="email" placeholder='Email' onChange={handleInputChange} value={user.email} />
            <input name="cpf" placeholder='CPF' onChange={handleInputChange} value={user.cpf} />
            <input type="date" name="birthDate" placeholder='Data de Nascimento' onChange={handleInputChange} value={user.birthDate} />
            <button onClick={() => handleSubmit()}>Editar</button>
        </Container>
    );
}

export default Edit;