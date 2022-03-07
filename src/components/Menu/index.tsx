import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

interface MenuProps{
    isExpand: boolean;
}

const Menu: React.FC<MenuProps> = ({isExpand}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
      <Container isExpand={isExpand}>
            <button onClick={() => navigate('/movies')}> Filmes</button>
            <button onClick={() => navigate('/users')}> Usuários</button>
            <button onClick={() => navigate('/rentals')}> Locação</button>
            <button onClick={() => navigate('/history')}> Histórico</button>
            <button onClick={()=> dispatch(signOut())}> Logout</button>
        </Container>
      
  )
}

export default Menu;