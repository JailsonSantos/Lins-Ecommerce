import React from 'react';
import Link from 'next/link';
import { slideItems } from '../../Database';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {
  Container,
  Slide,
  InfoContainer,
  Title,
  Description,
  Button,
  ImgContainer,
  Image
} from './estilo';

export const SlideshowImage = () => {

  return (
    <Container>
      <div className="slide-container">
        <Fade>
          {slideItems.map(slide => {
            return (
              <Slide key={slide.id}>
                <ImgContainer>
                  <Image src={slide.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{slide.title}</Title>
                  <Description>{slide.description}</Description>
                  <Link href={`/category/${slide.cat}`}>
                    <a>
                      <Button>IR PARA COLEÇÃO</Button>
                    </a>
                  </Link>
                </InfoContainer>
              </Slide>
            )
          })}
        </Fade>
      </div>
    </Container>
  );
};