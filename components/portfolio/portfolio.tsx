import Link from "next/link"
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import { ImageType } from "../../pages";
import { Container, Wrapper } from "./portfolio.styles"
import 'react-image-lightbox/style.css';

type ServicesProps = {
  images: Array<ImageType>;
  isPage?: boolean;
}

export const Portfolio = ({
  images,
  isPage
}: ServicesProps) => {
  const [
    imageFullscreen,
    setImageFullscreen
  ] = useState<null | {
    image: string;
    thumb: string;
  }>(null);

  return (
    <Wrapper isPage={!!isPage}>
      <span>Portfolio</span>
      <Container>
        {images.slice(0, isPage ? 9999999 : 6).map(({ image }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${image.url}?w=300&fm=webp&q=60`}
            key={image.url}
            onClick={() => setImageFullscreen({
              image: image.url,
              thumb: image.blurUpThumb
            })}
            alt=""
            role="presentation"
            loading="lazy"
          />
        ))}
      </Container>
      <Link href="/services">Pełne portfolio</Link>
      {imageFullscreen && (
        <Lightbox
          mainSrc={`${imageFullscreen.image}?w=1200&q=90`}
          onCloseRequest={() => setImageFullscreen(null)}
          enableZoom={false}
          mainSrcThumbnail={imageFullscreen.thumb}
        />
      )}
    </Wrapper>
  )
}