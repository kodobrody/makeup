import { ImageType } from "."
import { Navbar } from "../components/navbar/navbar"
import { Portfolio } from "../components/portfolio/portfolio"
import { Services, ServiceType } from "../components/services/services"
import { request } from "../datocms"

type ServicesPageProps = {
  services: Array<ServiceType>
}

const ServicesPage = ({ services }: ServicesPageProps) => {
  return (
    <>
      <Navbar />
      <Services services={services} isPage />
    </>
  )
}

export default ServicesPage

const ALL_SERVICES_QUERY = `query AllServicesQuery{
  allServices(first: 100) {
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
  const services = await request({
    query: ALL_SERVICES_QUERY
  })

  return {
    props: {
      services: services.allServices
    }
  }
}