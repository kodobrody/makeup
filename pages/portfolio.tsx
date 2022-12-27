import { ImageType } from "."
import { Navbar } from "../components/navbar/navbar"
import { Portfolio } from "../components/portfolio/portfolio"
import { request } from "../datocms"

type PortfolioPageProps = {
  images: Array<ImageType>
}

const PortfolioPage = ({ images }: PortfolioPageProps) => {
  return (
    <>
      <Navbar />
      <Portfolio isPage images={images} />
    </>
  )
}

export default PortfolioPage

const ALL_IMAGES_QUERY = `query AllImagesQuery{
  allPortfolioimages {
    image {
      url
      blurhash
      blurUpThumb
    }
  }
}`

export async function getStaticProps() {
  const images = await request({
    query: ALL_IMAGES_QUERY
  })

  return {
    props: {
      images: images.allPortfolioimages,
    }
  }
}