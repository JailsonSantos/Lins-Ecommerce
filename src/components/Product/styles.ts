import styled from 'styled-components';

export const Info = styled.div`
  top: 0;
  left: 0;
  z-index: 3;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  position: absolute;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  background-color: rgba(0,0,0,0.2);
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: auto;
  padding: 5px;
  display: flex;
  min-width: 280px;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};

  &:hover ${Info}{
    opacity: 1;
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};
`;

export const Image = styled.img`
  z-index: 2;
  max-width: 400px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin: 10px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  background-color: ${({ theme }) => theme.background};

  &:hover{
    transform: scale(1.1) ;
    background-color: ${({ theme }) => theme.background};
  }
`;

