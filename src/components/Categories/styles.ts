import styled from 'styled-components';
import { mobile } from '../../styles/Responsive';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CategoriesTitle = styled.h1`
min-width: 360px;
  height: 40px;
  margin: 10px 0;
  border-radius: 50px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};
`;

export const CategoriesList = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column', padding: '20px' })}
`;