import { darken } from "polished";
import styled from "styled-components";

import { mobile } from '../../styles/Responsive';

export const AreaPagination = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  margin: 0 auto;
  margin-top: 40px;
  align-items: center;
  border-radius: 50px;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.primary};

  
  ${mobile({ flexDirection: 'column-reverse', padding: '10px', margin: '20px 0' })}
`;

export const Box = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  strong{
    margin: 0 5px;
  }

  ${mobile({ paddingTop: '10px' })}
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  width: 30px;
  height: 30px;
  font-weight: 600;
  text-align: center;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  margin: 0 5px;
  font-weight: 600;
  border-radius: 15px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.shade};

  &:hover{
    background-color: ${({ theme }) => darken(0.1, theme.shade)};
  }
`;

export const ButtonActived = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  margin: 0 5px;
  cursor: default;
  font-weight: 600;
  border-radius: 15px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};
 `;


export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
