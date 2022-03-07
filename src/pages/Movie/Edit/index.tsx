import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { Header } from '../../_layouts/Default/styles'
import { MdArrowBack } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import * as Yup from "yup";

interface IMovieProps {
    name: string;
    genre: string;
    director: string;
    amount: number;
}

const Edit: React.FC = () => {
    const initialInfoState = {
        name: "",
        genre: "",
        director: "",
        amount: 1
    };
    const { id } = useParams();    
    const [movie, setMovie] = useState<IMovie>(initialInfoState); 
    const navigate = useNavigate();   

    const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        genre: Yup.string().required("O genêro é obrigatório"),
        director: Yup.string().required("O diretor é obrigatório"),
        amount: Yup.number().required("A quantidade é obrigatória"),
    });

    useEffect(() => {
        async function fetch() {
            try {
                const res = await api.get<IMovie>('movies/' + id);                
                setMovie(res.data);
            } catch (err) {
                console.log(err);
                toast.error("Filme não encontrado.");
            }
        }
        fetch();
    }, [id])

    

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setMovie({ ...movie, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await schema.validate(movie)
            const res = await api.put<IMovie>('movies/update', movie);
            toast.success("Filme atualizado.");
            setMovie(res.data);
        } catch (err: any) {
            console.log(err);
            toast.error(err.toString());
        }
    }
    return (
        <Container>
            <Header>
                <button onClick={() => navigate(-1)}><MdArrowBack /></button>
                <h3>Editar Filme</h3>
            </Header>
            <input type="text" name="name" placeholder='Nome' onChange={handleInputChange} value={movie?.name} />
            <input type="text" name="genre" placeholder='Gênero' onChange={handleInputChange} value={movie?.genre} />
            <input type="text" name="director" placeholder='Diretor' onChange={handleInputChange} value={movie?.director} />
            <input type="number" name="amount" placeholder='Quantidade' onChange={handleInputChange} value={movie?.amount} />
            <button onClick={() => handleSubmit()}>Confirmar</button>
        </Container>
    );
}

export default Edit;