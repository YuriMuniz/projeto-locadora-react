import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { format } from 'date-fns';

import { Container, List, Item } from './styles';

const History: React.FC = () => {
    const [history, setHistory] = useState<IHistory[]>();
    useEffect(() => {
        async function fetch() {
            try {
                const res = await api.get<IHistory[]>('history');
                console.log(res.data);
                setHistory(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetch();

    }, []);
    return (
        <Container>
            <h3>Histórico</h3>
            <List>
                {history?.map((item, index) => (
                    <Item key={index}>
                        {item.isRenewed ? (
                            <span>{"O filme " + item.movie.name + " foi renovado por "
                                + item.user.name + " no dia "
                                + format(new Date(item.updatedDate), "dd/MM/yyyy")}
                            </span>
                        ) : (
                            <span>{"O filme " + item.movie.name + " foi alugado por "
                                + item.user.name + " no dia "
                                + format(new Date(item.updatedDate), "dd/MM/yyyy")}
                            </span>
                        )}

                    </Item>

                ))}
            </List>

        </Container>

    );
}

export default History;