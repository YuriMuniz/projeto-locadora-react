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
    padding: 10px;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    small{
        color: ${({ theme }) => theme.colors.secondary};
        margin-top: 3px;
    }

    button{
            background: ${({ theme }) => theme.colors.shape};
            height: 44px;
            border: none;
            font-size: 16px;    
            font-weight: bold;
            border-radius: 4px;
            width: 100%;
            margin-top: 15px;
            color: ${({ theme }) => theme.colors.primary};
            :hover{
                background: ${({ theme }) => darken(0.04, theme.colors.shape)};
                color: ${({ theme }) => theme.colors.secondary};
            }
    }
`;

export const HeaderItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;

   

    
`;

export const InfoGroup = styled.div`
    display: flex;
    flex-direction: row;
   
    small{
        align-self: flex-end;
        background: ${({ theme }) => theme.colors.shape};
        color: ${({ theme }) => theme.colors.primary};  
        border-radius: 4px; 
        display: flex;
        align-items:center;
        justify-content: center;
        padding: 5px;
        margin-left: 5px;
        font-weight: bold;
    }
`;


export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
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

export const Movies = styled.div`
    display: flex;
    flex-direction: column;
    small{
        font-weight: bold;
    }
`;
