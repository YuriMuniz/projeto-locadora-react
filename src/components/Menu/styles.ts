import styled from 'styled-components';
import {darken} from 'polished';

interface MenuProps {
    isExpand: boolean;
}

export const Container = styled.div<MenuProps>`
    border-bottom-right-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${({ theme }) => theme.colors.shapeSecondary};
    left: 0;
    position: absolute;
    width: 15vw;
    z-index: 10;
    padding: 60px 20px;
    height: calc(100% - 60px);
    transform: ${(props) =>
        props.isExpand ? "translateX(0vw)" : "translateX(-90vw)"};
    transition: transform 0.4s ease-out;
    button{
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 18px;
        margin-bottom: 25px;
        :hover{
            color: ${({theme}) => darken(0.09,theme.colors.primary)}
        }
    }

    @media(max-width: 768px){
        width: 50vw;    
    }
`;
