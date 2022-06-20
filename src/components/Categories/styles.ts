import styled from 'styled-components';
import { mobile } from '../../styles/Responsive';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CategoriesTitle = styled.h1`
  height: 40px;
  display: flex;
  margin: 10px 0;
  min-width: 360px;
  text-align: center;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};

  ${mobile({ fontSize: '1.5rem', minWidth: '300px' })};
`;

export const CategoriesList = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column', padding: '20px' })}
`;