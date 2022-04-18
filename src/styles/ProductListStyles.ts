import { mobile } from './Responsive';
import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  margin: 20px;

  ${mobile({ margin: '5px 20px' })}
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: 20px;

  ${mobile({ width: '0px 20px', margin: '5px 20px', display: 'flex', flexDirection: 'column' })}
`;

export const FilterText = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  margin-right: 20px;

  ${mobile({ marginRight: '0px', fontSize: '1rem' })}
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 2px;
  margin-right: 20px;
  border: 1px solid ${({ theme }) => theme.shade};

  ${mobile({ margin: '10px 0px' })}
`;

export const Option = styled.option``;

