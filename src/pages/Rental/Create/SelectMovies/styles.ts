import styled from 'styled-components';

import { darken } from 'polished';

interface MovieProps {
    isSelected: boolean;
}

export const Container = styled.div`
    width: 100vw;
    max-width: 600px;
    input{
        width: 100%;
    }
`;

export const Header = styled.div`
  
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    
`;


export const Item = styled.li<MovieProps>`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    background: ${(props) => props.isSelected ? ({ theme }) => theme.colors.shapeSecondary : ({ theme }) => theme.colors.shape};
    padding: 10px ${({ theme }) => theme.colors.shapeSecondary};;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    small{
        color: ${({ theme }) => theme.colors.secondary};
        margin-top: 3px;
    }

    svg{
        
        color: ${({ theme }) => theme.colors.sucess};
        font-size: 22px;
        align-self: flex-end;
        background: ${({ theme }) => theme.colors.shape};
        padding: 5px;
        width: ${props => props.isSelected ? "32px" : "0px"};
        height: ${props => props.isSelected ? "32px" : "0px"};
        border-radius: 50%; 
        display: flex;
        align-items:center;
        justify-content: center;
    }

`;

export const HeaderItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;

    
`;


export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span{
        align-self: flex-end;
        background: ${({ theme }) => theme.colors.shapeSecondary};
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

export const ButtonBottom = styled.div`
    width: 100vw;
    max-width: 600px;
    position: fixed;
    bottom: 0;
    button{               
        background: ${({ theme }) => theme.colors.shapeSecondary};
        height: 44px;    
        font-size: 16px;
        font-weight: bold;
         border-radius: 0px;     
        border-top: 2px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        :hover{
            background: ${({ theme }) => darken(0.04, theme.colors.shapeSecondary)};
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
   
`;


