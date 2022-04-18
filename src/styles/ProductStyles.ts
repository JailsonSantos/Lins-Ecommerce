import { darken } from 'polished';
import { mobile } from './Responsive';
import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  padding: 50px;

  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({ height: '40%' })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({ padding: '10px' })}
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Description = styled.p`
  margin: 20px 0;
  text-align: justify;
`;

export const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

export const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0;
  justify-content: space-between;

  ${mobile({ width: '100%' })}
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const FilterSize = styled.select`
  padding: 5px;
  margin-left: 10px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ width: '100%' })}
`;

export const AmountContainer = styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.shade};
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 5px;
  border: 1.5px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.background}
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: ${({ theme }) => darken(0.1, theme.background)}
  }
`;
