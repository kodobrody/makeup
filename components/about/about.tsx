/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import { CertWrapper, Container, Wrapper } from "./about.styles";
import 'react-image-lightbox/style.css';

const About = ({ certificates }: any) => {
  const [
    imageFullscreen,
    setImageFullscreen
  ] = useState<null | {
    image: string;
    thumb: string;
  }>(null);
  return (
    <Wrapper>
      <span>O mnie</span>
      <p>Od kilku lat wizaż i charakteryzacja skradła moje serce i postanowiłam oddać się pasji w 100%. Obecnie uczęszczam do Szkoły MakeUp Star w Warszawie, gdzie czynnie uczestniczę w najnowszych warsztatach makjażowych min. MAC, Kryolan, Inglot czy Malu Wilz. Dodatkowo pracuję przy sesjach zdjęciowych, pokazach mody oraz spektaklach teatralnych. W wolnej chwili maluje klientki indywidualne na różne okazję.</p>
      <p>
        Wykonuje makijaże na różne okoliczności: śluby/wesela, studniówki, wyjścia. Jedyną granicą jest wyobraźnia
        <br />
        <br />
        Przed wizytą wykonuję dokładny wywiad, aby szczegółowo poznać oczekiwania Klienta. Zapraszam do kontaktu w celu omówienia szczegółów.
      </p>
      <h1>
        Certyfikaty
      </h1>
      <Container>
        {certificates?.map((certificate: any) => (
          <CertWrapper key={certificate.id}>
            <img
              alt=""
              role="presentation"
              src={`${certificate.image.url}?w=300&fm=webp&q=60`}
              onClick={() => setImageFullscreen({
                image: certificate.image.url,
                thumb: certificate.image.blurUpThumb
              })}
              loading="lazy"
            />
            <span>{certificate.title}</span>
          </CertWrapper>
        ))}
      </Container>
      {imageFullscreen && (
        <Lightbox
          mainSrc={`${imageFullscreen.image}?w=1200&q=90`}
          onCloseRequest={() => setImageFullscreen(null)}
          enableZoom={false}
          mainSrcThumbnail={imageFullscreen.thumb}
        />
      )}
    </Wrapper>
  );
}

export default About;