import React, { useEffect, useState } from 'react';
import {
    Container, List, Item,
    HeaderItem, Footer, Description,
    ButtonBottom
} from './styles';
import api from '../../../../services/api';
import { toast } from 'react-toastify';
import ModalSubmit from '../ModalSubmit';
import { useParams } from 'react-router-dom';
import { MdArrowBack, MdDone } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../_layouts/Default/styles';
const SelectMovies: React.FC = () => {
    const initialState: number[] = [];
    const [movies, setMovies] = useState<IMovie[]>();
    const [idMovies, setIdMovies] = useState<number[]>(initialState);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { idUser } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetch() {
            try {
                const res = await api.get<IMovie[]>('movies');
                console.log(res.data);
                setMovies(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetch();

    }, [idMovies]);

    const handleSelectMovie = (id: number) => {

        if (idMovies.includes(id)) {
            const newIdMovies = idMovies.filter((item) => item !== id);
            setIdMovies(newIdMovies);

        } else {
            if (idMovies.length >= 5) {
                toast.error('Limite máximo de 5 filmes antigido');
                return;
            }
            setIdMovies([...idMovies, id]);
        }

    }


    const handleConfirm = () => {
        setIsOpenModal(true);
    }


    return (
        <Container>
            <Header>
                <button onClick={() => navigate(-1)}><MdArrowBack /></button>
                <h3>Selecione os filmes</h3>

            </Header>
            <input type="tex" placeholder='Busque pelo nome' />
            <List>
                {movies && movies.map((movie, index) => (
                    <>
                        {movie.id &&
                            <Item key={index} isSelected={idMovies.includes(movie.id)} onClick={() => movie.id && handleSelectMovie(movie.id)}>
                                <HeaderItem>
                                    <h4>{movie.name}</h4>
                                    <MdDone />
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
                        }
                    </>

                ))}
            </List>
            {idMovies.length > 0 && (
                <ButtonBottom >
                    <button onClick={() => handleConfirm()}>Confirmar</button>
                </ButtonBottom>
            )}
            <ModalSubmit isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}
                idUser={idUser} idsMovies={idMovies} />

        </Container>
    );
}

export default SelectMovies;