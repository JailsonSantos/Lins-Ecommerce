import React, { useState } from 'react';
import { slideItems } from '../../Database';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Button,

} from './styles';

export function Slider() {

  const [slideIndex, setSlideIndex] = useState(0);

  function handleClick(direction: string) {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((slide) => (
          <Slide key={slide.id} bgColor={slide.bgColor}>
            <ImgContainer>
              <Image src={slide.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Description>{slide.description}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))
        }
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}