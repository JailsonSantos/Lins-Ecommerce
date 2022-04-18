import { darken } from 'polished';
import styled from 'styled-components';
import { mobile } from '../../styles/Responsive';

export const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  
  ${mobile({ height: '30vh' })}
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 20px;

  ${mobile({ fontSize: '3.5rem' })}
`;

export const Description = styled.div`
  font-weight: 300;
  font-size: 1.5rem;
  margin-bottom: 20px;

  ${mobile({ textAlign: 'center' })}
`;

export const InputContainer = styled.div`
  width: 50%;
  display: flex;
  height: 2.5rem;
  border-radius: 5px;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.shade};
  background-color: ${({ theme }) => theme.background};

  ${mobile({ width: '80%' })}
`;

export const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  padding: 0 10px;
  border-radius: 5px 0 0 5px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  border-radius: 0 4px 4px 0;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};

  &:hover{
    background-color: ${({ theme }) => darken(0.02, theme.primary)};
  }
`;