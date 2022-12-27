import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Background, Container, IconWrapper, LeftWrapper, Wrapper } from "./header.styles"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <LeftWrapper>
          <span>Julia Budziak</span>
          <span>Od kilku lat wizaż i charakteryzacja skradła moje serce i postanowiłam oddać się pasji w 100%. Obecnie uczęszczam do Szkoły MakeUp Star w Warszawie, gdzie czynnie uczestniczę w najnowszych warsztatach makjażowych min. MAC, Kryolan, Inglot czy Malu Wilz. Dodatkowo pracuję przy sesjach zdjęciowych, pokazach mody oraz spektaklach teatralnych. W wolnej chwili maluje klientki indywidualne na różne okazję.</span>
          <IconWrapper href="tel:0048602797434">
            <FontAwesomeIcon icon={faPhone} color="#fdf3f3" />
            602 797 434
          </IconWrapper>
          <IconWrapper href="https://instagram.com/makeup__pleasure" target="_blank">
            <FontAwesomeIcon icon={faInstagram} fontSize={20} color="#fdf3f3" />
            makeup__pleasure
          </IconWrapper>
        </LeftWrapper>
        <img src="" alt="" role="presentation" />
      </Container>
      {/*<Background />*/}
    </Wrapper>
  )
}