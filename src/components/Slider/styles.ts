import styled from 'styled-components';
import { darken } from 'polished';
import { mobile } from '../../styles/Responsive';

interface ArrowProps {
  direction: string;
}

interface SlideProps {
  bgColor: string;
}

interface WrapperProps {
  slideIndex: number;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  
  ${mobile({ display: 'none' })}
`;

export const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  display: flex;

  top: 0;
  bottom: 0;
  z-index: 2;
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundLight};
  
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
`;

export const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw) ;
`;

export const Slide = styled.div<SlideProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bgColor};
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const Image = styled.img`
  width: 85%;
  height: 85%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 3rem;
`;

export const Title = styled.h1`
  font-size: 4.4rem;
`;

export const Description = styled.p`
  margin: 4.4rem 0;
  font-weight: 500;
  font-size: 1.3rem;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  font-size: 1.3rem;
  background-color: transparent;
`;