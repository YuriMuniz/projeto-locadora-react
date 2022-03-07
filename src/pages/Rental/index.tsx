import React, { useState, useEffect } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import {
    Container, List, Item, HeaderItem,
    Footer, Description, InfoGroup, Movies
} from './styles';

//import ModalConfirmDelete from './ModalConfirmDelete';
import api from '../../services/api';
import ModalRenewedSubmit from './Create/ModalRenewedSubmit';


const Rental: React.FC = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [rentals, setRentals] = useState<IRental[]>();
    const [idRental, setIdRental] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetch() {
            if (!isOpenModal) {
                try {
                    const res = await api.get<IRental[]>('rentals');
                    console.log(res.data);
                    setRentals(res.data);
                } catch (err) {
                    console.log(err);
                }
            }
        }
        fetch();
    }, [isOpenModal]);

    useEffect(() => {
        console.log(rentals);
    }, [rentals])


    const handleModal = (id: number | undefined) => {
        setIsOpenModal(!isOpenModal);
        if (id) {
            setIdRental(id);
        }
    }
    return (
        <Container>
            <button onClick={() => navigate('/rentals/select-user')}>Nova Locação</button>
            <List>
                {rentals && rentals.map((rental, index) => (
                    <Item key={index}>
                        <HeaderItem>
                            <h4>{rental.user && rental.user.name}</h4>
                            <InfoGroup>
                                <small>{rental.isRenewed ? "Renovação" : "Aluguel"}</small>
                                <small>{format(new Date(rental.createdDate), 'dd/MM/yyyy')}</small>
                                <small>{rental.isRenewed ? (
                                    format(new Date(rental.returnDateRenewed), 'dd/MM/yyyy')
                                ) : (
                                    format(new Date(rental.returnDate), 'dd/MM/yyyy')
                                )}
                                </small>
                            </InfoGroup>


                        </HeaderItem>
                        <Footer>
                            <Movies>
                                {rental.movies && rental.movies.map((movie, index) => (
                                    <Description key={index}>
                                        <small>{movie.name}</small>
                                    </Description>

                                ))}

                            </Movies>

                        </Footer>
                        {rental.countRenewed < 2 && (
                            <button onClick={() => handleModal(rental.id)}>Renovar</button>
                        )}
                    </Item>
                ))}
            </List>
            <ModalRenewedSubmit isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} idRental={idRental} />
        </Container>
    );
}

export default Rental;