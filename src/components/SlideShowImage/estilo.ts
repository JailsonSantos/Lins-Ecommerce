import styled from 'styled-components';

import { mobile } from '../../styles/Responsive'

export const Container = styled.div``;

export const Slide = styled.div`
  width: 100%;
  display: flex;

  ${mobile({ flexDirection: 'column' })};
`;



export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${mobile({ padding: '20px' })};
`;

export const Image = styled.img`
  width: 100%;

`;


export const InfoContainer = styled.div`
  flex: 1;
  font-size: 1em;

  

  ${mobile({ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' })};
`;

export const Title = styled.h1`
  font-size: 4.4rem;

  ${mobile({ fontSize: '1.5rem' })};
`;

export const Description = styled.p`
  margin: 4.4rem 0;
  padding-right: 1rem;
  font-weight: 500;
  font-size: 1.3rem;

  ${mobile({ fontSize: '1rem', margin: '1rem 0', padding: '1rem' })};
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  font-size: 1.3rem;
  border-radius: 5px;
  transition: all 0.5s ease;
  background-color: transparent;

  &:hover{
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary};
  }

  ${mobile({ fontSize: '0.75rem' })}
`;