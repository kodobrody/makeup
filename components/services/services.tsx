import Link from "next/link"
import { Container, ServiceWrapper, Wrapper } from "./services.styles"


export type ServiceType = {
  title: string;
  description: string;
  priceMin: number;
  priceMax: number;
  id?: string;
}

type ServicesProps = {
  services: Array<ServiceType>;
  isPage?: boolean;
}

export const Services = ({
  services,
  isPage
}: ServicesProps) => {
  return (
    <Wrapper isPage={!!isPage}>
      <span>Usługi</span>
      <Container>

        {services.slice(0, 4).map(({ id, ...service }) => <Service {...service} key={id} />)}
      </Container>
      <Link href="/services">Więcej o usługach</Link>
    </Wrapper>
  )
}

export const Service = (props: ServiceType) => {
  const {
    description,
    title,
    priceMin,
    priceMax
  } = props;
  return (
    <ServiceWrapper>
      <span>{title}</span>
      <span>{description}</span>
      <span>{priceMin}{priceMax > priceMin && ` - ${priceMax}`}&nbsp;PLN</span>
    </ServiceWrapper>
  )
}