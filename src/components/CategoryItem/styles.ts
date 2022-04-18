import { darken } from 'polished';
import styled from 'styled-components';
import { mobile } from '../../styles/Responsive';

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({ height: '25vh' })}
`;

export const Info = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
  border: none;
  padding: 1rem;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 600;
  color: ${({ theme }) => theme.shade};
  background-color: ${({ theme }) => theme.background};

  &:hover{
    font-weight: 600;
    color: ${({ theme }) => darken(0.5, theme.background)};
  }
`;
