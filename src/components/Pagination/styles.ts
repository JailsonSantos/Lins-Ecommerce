import { darken } from "polished";
import styled from "styled-components";

export const AreaPagination = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  margin: 0 auto;
  margin-top: 40px;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  align-items: space-between;
  border: 1px solid ${({ theme }) => theme.primary};
`;

export const Box = styled.div`
  width: 300px;
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
