import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    width: 100%;

    input{
        width: 100%;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    padding: 10px;
    background: ${({ theme }) => theme.colors.shapeSecondary};
    border-radius: 4px;
    h4{
        color: ${({ theme }) => theme.colors.secondary};
        
    }

    button{
        background: none;
        margin-top: 0;
        display: flex;
        align-items: center;
        align-self: flex-end;
        width: 120px;
        background: ${({ theme }) => theme.colors.shape};
        padding: 5px;
        :hover{
            background: ${({ theme }) => darken(0.01, theme.colors.shape)};
             
        }
        svg{
            font-size: 22px;
            margin-left: 5px;
                                 
        }
        
    }
`;
