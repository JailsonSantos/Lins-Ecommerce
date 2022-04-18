import { darken } from 'polished';
import { mobile } from './Responsive';
import styled from 'styled-components';

interface TopButtonProps {
  filled?: string;
}
interface ProductColorProps {
  color: string;
}
interface SummaryItemProps {
  type?: string;
}

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: '10px' })}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const TopButton = styled.button<TopButtonProps>`
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  border: ${(props) => props.filled === "filled" && "none"};
  color: ${(props) => props.filled === "filled" && "white"};
  background-color: ${(props) => props.filled === "filled" ? props.theme.backgroundDark : 'transparent'};

  transition: all 0.2s ease;

  &:hover{
    background-color: ${(props) => props.filled === "filled" ? darken(0.05, props.theme.backgroundDark) : 'transparent'};
  }
`;

export const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;

export const TopText = styled.span`
  margin: 0 10px;
  cursor: pointer;
  text-decoration: underline;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })}
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const Strong = styled.b``;

export const ProductId = styled.span``;

export const ProductColor = styled.div<ProductColorProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductAmount = styled.div`
  margin: 5px;
  font-size: 1.5rem;

  ${mobile({ margin: '5px 15px' })}
`;

export const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;

  ${mobile({ marginBottom: '20px' })}
`;

export const Hr = styled.hr`
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.borderLight};
`
export const Summary = styled.div`
  flex: 1;
  height: 55vh;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderLight};
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div<SummaryItemProps>`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  font-size:${(props) => props.type === 'total' && '24px'};
  font-weight:${(props) => props.type === 'total' && '500'} ;
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: 600;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.backgroundDark};
  transition: all 0.2s ease;

  &:hover{
    background-color: ${({ theme }) => darken(0.05, theme.backgroundDark)}
  }
`;
