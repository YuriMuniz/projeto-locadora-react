import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.deep};
    min-height: 100vh;
    width: 100%;
`;

export const OutletContainer = styled.div`
    width: 100vw;
    height: 100%;
    max-width: 600px;
    padding: 0px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    button{
        background: ${({ theme }) => theme.colors.shapeSecondary};
        height: 44px;
        border: none;
        font-size: 16px;    
        font-weight: bold;
        border-radius: 4px;
        width: 100%;
        color: ${({ theme }) => theme.colors.primary};
        :hover{
            background: ${({ theme }) => darken(0.04, theme.colors.shapeSecondary)};
            color: ${({ theme }) => theme.colors.secondary};
        }
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
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        background: none;
        border: none;
        width: 10%;
        svg{
            font-size: 22px;
        }
    }

    h3{
        color: ${({ theme }) => theme.colors.primary};

    }

`;

