import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconWrapper } from "../header/header.styles"
import { Wrapper } from "./contact.styles"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Contact = () => {
  return (
    <Wrapper>
      <span>Kontakt</span>
      <IconWrapper href="tel:0048602797434">
        <FontAwesomeIcon icon={faPhone} color="#fdf3f3" />
        602 797 434
      </IconWrapper>
      <IconWrapper href="https://instagram.com/makeup__pleasure" target="_blank">
        <FontAwesomeIcon icon={faInstagram} fontSize={20} color="#fdf3f3" />
        makeup__pleasure
      </IconWrapper>
      <img src="/contact.jpg" alt="" role="presentation" />
    </Wrapper>
  )
}