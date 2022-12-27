import { Inter } from '@next/font/google'
import { Header } from '../components/header/header'
import { Navbar } from '../components/navbar/navbar'
import { Portfolio } from '../components/portfolio/portfolio'
import { Services, ServiceType } from '../components/services/services'
import { request } from '../datocms'

const inter = Inter({ subsets: ['latin'] })


export type ImageType = {
  image: {
    url: string,
    blurhash: string;
    blurUpThumb: string;
    id?: string;
  }
}
type HomeProps = {
  images: Array<ImageType>
  services: Array<ServiceType>
}



export default function Home({ images, services }: HomeProps) {
  return (
    <>
      <Navbar />
      <Header />
      <Services services={services} />
      <Portfolio images={images} />
    </>
  )
}

const ALL_IMAGES_QUERY = `query AllImagesQuery{
  allPortfolioimages(first: 6) {
    image {
      url
      blurhash
      blurUpThumb
    }
  }
}`

const ALL_SERVICES_QUERY = `query AllServicesQuery{
  allServices(first: 4) {
    title
    description
    priceMin
    priceMax
    icon {
      url
      blurhash
      blurUpThumb
    }
  }
}
`

export async function getStaticProps() {
  const images = await request({
    query: ALL_IMAGES_QUERY
  })

  const services = await request({
    query: ALL_SERVICES_QUERY
  })

  return {
    props: {
      images: images.allPortfolioimages,
      services: services.allServices
    }
  }
}