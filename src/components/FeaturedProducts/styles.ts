import styled from 'styled-components';
import { mobile } from '../../styles/Responsive';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProductArea = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ProductTitle = styled.h1`
  height: 40px;
  display: flex;
  margin: 10px 0;
  padding: 0 20px;
  min-width: 360px;
  text-align: center;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};

  ${mobile({ fontSize: '1.5rem', minWidth: '300px' })};
`;