import styled from 'styled-components';
import { mobile } from '../../styles/Responsive';

export const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column', padding: '20px' })}
`;
