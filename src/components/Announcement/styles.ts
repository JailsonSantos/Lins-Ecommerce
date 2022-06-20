import styled from 'styled-components';
import { mobile } from '../../styles/Responsive';

export const Container = styled.div`
  height: 2rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;

  ${mobile({ fontSize: '0.75rem', padding: '0 10px' })};
`;