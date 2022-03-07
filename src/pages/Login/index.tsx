import React, { useState } from 'react';

import { Container, Content } from './styles';
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { signInRequest } from "../../store/modules/auth/actions";
import { toast } from 'react-toastify';

interface ILoginProps {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const initialInfoState = {
        email: "",
        password: ""
    };


    const [credentials, setCredentials] = useState<ILoginProps>(initialInfoState);

    const dispatch = useDispatch();
    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Insira um e-mail válido")
            .required("O e-mail é obrigatório"),
        password: Yup.string().required("A senha é obrigatória"),
    });

    const loading = useSelector((state: any) => state.auth.loading);

    async function handleSubmit() {
        try {
            await schema.validate({ email: credentials.email, password: credentials.password })
            dispatch(signInRequest(credentials.email, credentials.password));
        } catch (err: any) {
            toast.error(err.toString());
        }


    }

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };



    return (
        <Container>
            <Content>
                <h3>Login</h3>
                <input type='email'
                    placeholder='Seu e-mail'
                    name="email"
                    onChange={handleInputChange}
                    value={credentials.email} />
                <input type='password'
                    placeholder='Sua senha'
                    name="password"
                    onChange={handleInputChange}
                    value={credentials.password} />
                <button onClick={() => handleSubmit()}>{!loading ? 'Entrar' : 'Carregando'}</button>
            </Content>
        </Container>
    );
}

export default Login;