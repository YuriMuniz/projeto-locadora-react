import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.deep};
`;

export const Content = styled.div`
    width: 100%;
    max-width: 350px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    h3{
        align-self: center;
        color: ${({ theme }) => theme.colors.primary};
    }
    input{
        margin-top: 10px;
        height: 44px;
        padding: 10px;
        color: ${({ theme }) => theme.text.input};
        border-radius: 4px;
        border: none;
        background: ${({ theme }) => theme.colors.shape};
        &::placeholder{
            color: ${({ theme }) => theme.text.placeholder};
        }
        
    }
    button{
        background: ${({ theme }) => theme.colors.shape};
        margin-top: 10px;
        height: 44px;
        border: none;
        font-size: 18px;    
        font-weight: bold;
        border-radius: 4px;
        color: ${({ theme }) => theme.colors.primary};
        :hover{
            background: ${({ theme }) => darken(0.04, theme.colors.shape)};
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
    
`;
