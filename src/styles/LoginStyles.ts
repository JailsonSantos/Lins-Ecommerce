import { darken } from 'polished';
import { mobile } from './Responsive';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(255, 255, 255,0.5),rgba(255, 255, 255, 0.5)),
  url("https://grupodicas.com.br/wp-content/uploads/2018/05/Compras-1-1.jpg") center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};

  ${mobile({ width: '90%' })}
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  outline: none;
  margin: 10px 0;
  min-width: 40%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.shade};
`;

export const Button = styled.button`
  width: 40%;
  display:flex;
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  margin-bottom: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  outline-color: ${({ theme }) => theme.primary}; 
  background-color: ${({ theme }) => theme.primary};

  &:hover{
    background-color: ${({ theme }) => darken(0.05, theme.primary)};
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.error};
`;

export const AreaUser = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  max-width: 300px;
  justify-content: space-between;
`;

export const SpanUser = styled.span`
  display: flex;
  align-items: center;

  a{ 
    display: flex;
    align-items: center;

    &:hover{
      color: ${({ theme }) => theme.primary};
    }
  }
  
  &:hover{
    color: ${({ theme }) => theme.primary};
  }
`;

export const TextUser = styled.p`
  cursor: pointer;
`;

export const LinkUser = styled.a`
  display: flex;
  margin: 5px 0;
  cursor: pointer;
  font-size: .75rem;
  align-items: center;

    &:hover{
      color: red !important;
  }
`;

export const ButtonGoogle = styled.button`
  width: 100%;
  display: flex;
  padding: 10px;
  font-weight: 500;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.error};
  transform: 0.2s;

  &:hover{
    filter: brightness(0.9);
  }
`;

export const IconGoogle = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;