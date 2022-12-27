import { faHome, faImage, faPaintBrush, faPerson, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useScrollPosition from "../../hooks"
import { Container, MenuWrapper, Wrapper } from "./navbar.styles"

export const Navbar = () => {
  const router = useRouter();
  const scrollPosition = useScrollPosition();


  return (
    <Wrapper className={scrollPosition > 0 ? 'scrolled' : ''}>
      <Container>
        <Link href="/">
          Julia Budziak
        </Link>
        <MenuWrapper>
          <Link
            href="/"
            className={router.pathname === '/' ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faHome} />
            Główna
          </Link>
          <Link
            href="/about"
            className={router.pathname === '/about' ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faPerson} />
            O mnie
          </Link>
          <Link
            href="/services"
            className={router.pathname === '/services' ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faPaintBrush} />
            Usługi
          </Link>
          <Link
            href="/portfolio"
            className={router.pathname === '/portfolio' ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faImage} />
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={router.pathname === '/contact' ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faPhone} />
            Kontakt
          </Link>
        </MenuWrapper>
      </Container>
    </Wrapper>
  )
}