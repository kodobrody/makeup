import { Inter } from '@next/font/google'
import { Header } from '../components/header/header'
import { Navbar } from '../components/navbar/navbar'
import { Opinions } from '../components/opinions/opinions'
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

export type Opiniontype = {
  comment: string;
  nickname: string;
  noinsta: boolean;
  id: string;
}

type HomeProps = {
  images: Array<ImageType>
  services: Array<ServiceType>
  opinions: Array<Opiniontype>
}



export default function Home({ images, services, opinions }: HomeProps) {
  return (
    <>
      <Navbar />
      <Header />
      <Services services={services} />
      <Portfolio images={images} />
      <Opinions opinions={opinions} />
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

const ALL_OPINIONS_QUERY = `query AllOpinionsQuery{
  allOpinions(first: 6) {
    nickname
    comment
    noinsta
    id
  }
}`

export async function getStaticProps() {
  const images = await request({
    query: ALL_IMAGES_QUERY
  })

  const services = await request({
    query: ALL_SERVICES_QUERY
  })
  const opinions = await request({
    query: ALL_OPINIONS_QUERY
  })

  return {
    props: {
      images: images.allPortfolioimages,
      services: services.allServices,
      //opinions: opinions.allOpinions
      opinions: opinions.allOpinions
    }
  }
} 