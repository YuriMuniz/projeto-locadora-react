import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { Header } from '../../_layouts/Default/styles'
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import api from '../../../services/api';

interface IMovieProps {
    name: string;
    genre: string;
    director: string;
    amount: number;
}

const Create: React.FC = () => {
    const initialInfoState = {
        name: "",
        genre: "",
        director: "",
        amount: 1
    };

    const [movie, setMovie] = useState<IMovieProps>(initialInfoState);

    const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        genre: Yup.string().required("O genêro é obrigatório"),
        director: Yup.string().required("O diretor é obrigatório"),
        amount: Yup.number().required("A quantidade é obrigatória"),
    });
    const navigate = useNavigate();


    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setMovie({ ...movie, [name]: value });
    };

    const handleSubmit = async () => {
        try {
        
            await schema.validate(movie)
            const res = await api.post<IMovieProps>('movies/create', movie);
            toast.success('Filme ' + res.data.name + ' adicionado com sucesso.');
            setMovie(initialInfoState);
        } catch (err: any) {
            toast.error(err.toString());
        }

    }

    return (
        <Container>
            <Header>
                <button onClick={() => navigate(-1)}><MdArrowBack /></button>
                <h3>Adicionar Filme</h3>
            </Header>
            <input type="text" name="name" placeholder='Nome' onChange={handleInputChange} value={movie.name} />
            <input type="text" name="genre" placeholder='Gênero' onChange={handleInputChange} value={movie.genre} />
            <input type="text" name="director" placeholder='Diretor' onChange={handleInputChange} value={movie.director} />
            <input type="number" name="amount" placeholder='Quantidade' onChange={handleInputChange} value={movie.amount} />
            <button onClick={() => handleSubmit()}>Adicionar</button>
        </Container>
    );
}

export default Create;