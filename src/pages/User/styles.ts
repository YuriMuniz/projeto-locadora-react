import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    width: 100%;
    
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    background: ${({ theme }) => theme.colors.shapeSecondary};
    padding: 0px 10px;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    small{
        color: ${({ theme }) => theme.colors.secondary};
        margin-top: 3px;
    }
`;

export const HeaderItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
        
`;


export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span{
        align-self: flex-end;
        background: ${({ theme }) => theme.colors.shape};
        color: ${({ theme }) => theme.colors.primary};  
        width: 28px;
        height: 28px;
        border-radius: 50%; 
        display: flex;
        align-items:center;
        justify-content: center;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
`;

export const IconGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    button{
        background: none;
        margin-top: 0;
        display: flex;
        align-items: center;
        :hover{
            background: none;
            color: ${({ theme }) => darken(0.1, theme.colors.primary)}; 
        }
        svg{
            font-size: 22px;
            margin-left: 5px;
                                 
        }
        
    }

`;

