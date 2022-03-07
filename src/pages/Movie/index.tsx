import React, { useState, useEffect } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {
    Container, List, Item, HeaderItem,
    Footer, Description, IconGroup
} from './styles';

import ModalConfirmDelete from './ModalConfirmDelete';
import api from '../../services/api';

const Movie: React.FC = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [movies, setMovies] = useState<IMovie[]>();
    const [movieSelectedId, setMovieSelectedId] = useState<number>();

    useEffect(() => {
        async function fetch() {
            if (!isOpenModal) {
                try {
                    const res = await api.get<IMovie[]>('movies');
                    console.log(res.data);
                    setMovies(res.data);
                } catch (err) {
                    console.log(err);
                }
            }
        }
        fetch();
    }, [isOpenModal]);

    useEffect(() => {
        console.log(movies);
    }, [movies])

    const navigate = useNavigate();
    const handleModal = (id: number | undefined) => {
        setIsOpenModal(!isOpenModal);
        if (id) {
            setMovieSelectedId(id);
        }
    }
    return (
        <Container>
            <button onClick={() => navigate('/movies/create')}>Adicionar Filme</button>
            <List>
                {movies && movies.map((movie) => (
                    <Item key={movie.id}>
                        <HeaderItem>
                            <h4>{movie.name}</h4>
                            <IconGroup>
                                <button onClick={() => navigate('/movies/edit/' + movie.id)}><MdEdit /></button>
                                <button><MdDelete onClick={() => handleModal(movie.id)} /></button>
                            </IconGroup>
                        </HeaderItem>
                        <Footer>
                            <Description>
                                <small>{movie.genre}</small>
                                <small>{movie.director}</small>
                            </Description>
                            <span>{movie?.amountRented &&
                                movie?.amountRented > 0 ? (
                                movie.amount - movie.amountRented
                            ) : (
                                movie.amount
                            )}</span>

                        </Footer>
                    </Item>
                ))}
            </List>
            <ModalConfirmDelete isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} id={movieSelectedId} />
        </Container>
    );
}

export default Movie;