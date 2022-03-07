import styled from 'styled-components';

import { darken } from 'polished';

interface ModalProps{
    isOpenModal: boolean;
}

export const Container = styled.div<ModalProps>`
    padding: 20px;
    width: 95%;
    max-width: 600px;
    height: 250px;
    align-self: center;
    background: ${({ theme }) => theme.colors.shape};
    border-radius: 4px;
    position: fixed;
    left: 0; 
    right: 0;
    top: 70px; 
    margin-left: auto; 
    margin-right: auto; 
    transform: ${(props) =>
    props.isOpenModal ? "translateX(0vw)" : "translateX(100vw)"};
    transition: transform 0.4s ease-out;
`;


export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    button{
        background: none;
        border: none;
        width: 20px;
        :hover{
            background: none;
            border: none;
        }
    }

    h4{
        color: ${({ theme }) => theme.colors.primary};
        font-size: 22px;
    }

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0px 30px 0px;
    span{
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 18px;
    } 

`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        background: ${({ theme }) => theme.colors.sucess};
        width: 100%;
        :hover{
            background: ${({ theme }) => darken(0.01, theme.colors.sucess)};
        }
       
    }

`;

