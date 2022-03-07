import styled from 'styled-components';

export const Container = styled.div`
    max-height: 100vh;
   
    
`;

export const Content = styled.div`

    height: 60px;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.shapeSecondary};
    color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    flex-direction: column;
    justify-content: center; 

    button{
        border: none;
        background: none;  
        margin: 0px 15px;      
        svg{          
            font-size: 32px;
            color: ${({ theme }) => theme.colors.secondary};
        }
        
    }   

`;

export const Group = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
