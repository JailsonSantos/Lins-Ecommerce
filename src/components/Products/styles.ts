import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ProductList = styled.h1`
  width: 400px;
  margin: 10px auto 20px auto;
  border-radius: 50px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};
`;