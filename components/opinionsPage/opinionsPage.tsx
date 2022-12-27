import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconWrapper } from "../header/header.styles"
import { Wrapper } from "./opinionsPage.styles"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Opiniontype } from "../../pages"
import { Opinion } from "../opinions/opinions"

type OpinionsPageProps = {
  opinions: Array<Opiniontype>
}

export const OpinionsPage = ({ opinions }: OpinionsPageProps) => {
  return (
    <Wrapper>
      <span>Opinie</span>
      {opinions.map((opinion, index) => <Opinion {...opinion} key={opinion.id} isRight={!!(index % 2)} />)}
    </Wrapper>
  )
}