import { darken } from 'polished';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { mobile } from '../../styles/Responsive';

interface SocialIconProps {
  color: string;
}

export const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: 'column' })};
`;

export const Left = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.h1``;

export const Description = styled.p`
  margin:  20px 0;
  text-align: justify;
`;

export const SocialContainer = styled.div`
  display: flex;

  ${mobile({ justifyContent: 'space-between', alignItems: 'center' })}
`;

export const SocialIcon = styled.div<SocialIconProps>`
  width: 40px;
  height: 40px;
  display: flex;
  margin-right: 20px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background-color: ${(props) => props.color};

  &:hover{
    cursor: pointer;
    background-color: ${(props) => darken(0.05, props.color)};
  }

  ${mobile({ marginRight: '0px' })}
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ display: 'none' })}
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundLight};

  ${mobile({ backgroundColor: theme.backgroundDarkLight })};
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const DescriptionItem = styled.p`
  margin-left: 10px;
`;

export const Payment = styled.img`
  width: 50%;
`;
