import styled from "styled-components";
import { mobile } from "../../styles/Responsive";

export const Container = styled.div`
  height: 4rem;

  ${mobile({ height: '50px' })}
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between; 

  ${mobile({ padding: '10px 0px' })} 
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;

  ${mobile({ display: 'none' })}
`;

export const SearchContainer = styled.div`
  display: flex;
  padding: 0 .5rem;
  margin-left: 1.5rem;
  border-radius: 5px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.shade};

  svg{
    cursor: pointer;
  }

  ${mobile({ marginLeft: '5px' })}
`;

export const Input = styled.input`
  height: 30px;
  border: none;
  outline: none;

  ${mobile({ width: '50px' })}
`;

export const Center = styled.div` 
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

export const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1rem;
  padding: 5px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover{
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.primary};
  }
  
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

export const ImageAvatar = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-left: 1rem;
  border-radius: 50%;
`;