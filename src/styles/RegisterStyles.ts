import { darken } from 'polished';
import styled from 'styled-components';
import { mobile } from './Responsive';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(255, 255, 255,0.5),rgba(255, 255, 255, 0.5)),
  url("https://www.estratosferaoficial.com.br/images-i/cat-a/banner.png") center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 40% ;
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
  flex-wrap: wrap;

  ${mobile({ flexDirection: 'column' })}
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  outline: none;
  min-width: 40%;
  border-radius: 5px;
  margin: 20px 10px 0 0;
  border: 1px solid ${({ theme }) => theme.shade};

  ${mobile({ margin: '10px 0px' })}
`;

export const Agreement = styled.span`
  margin: 20px 0;
  font-size: .8rem;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  outline-color: ${({ theme }) => theme.primary}; 
  background-color: ${({ theme }) => theme.primary};

  &:hover{
    background-color: ${({ theme }) => darken(0.02, theme.primary)}
  }

  ${mobile({ width: '100%' })}
`;
