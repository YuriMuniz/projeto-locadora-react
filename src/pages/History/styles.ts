import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    h3{
        color: ${({ theme }) => theme.colors.secondary};
        align-self: center;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const Item = styled.li`
    background: ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.primary};
    padding: 10px;
    width: 100%;
    margin: 5px 0px;
    border-radius: 4px;
`;
