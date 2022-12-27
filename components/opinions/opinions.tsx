import Link from "next/link";
import { Opiniontype } from "../../pages"
import { OpinionWrapper, Wrapper } from "./opinions.styles"

type OpinionsProps = {
  opinions: Array<Opiniontype>;
}

export const Opinions = ({ opinions }: OpinionsProps) => {
  return (
    <Wrapper>
      {opinions.map((opinion, index) => <Opinion isRight={!!(index % 2)} key={opinion.id} {...opinion} />)}
      <Link href="/opinions">Wszystkie opinie</Link>
    </Wrapper>
  )
}

type OpinionProps = Opiniontype & { isRight: boolean }

export const Opinion = ({ nickname, comment, isRight, noinsta }: OpinionProps) => {
  return (
    <OpinionWrapper isRight={isRight}>
      <p>
        {comment}
      </p>
      <br />
      {noinsta ?
        <span>{nickname}</span> :
        <a
          href={`https://instagram.com/${nickname}`}
          target="_blank"
          rel="noreferrer"
        >
          {`@ ${nickname}`}
        </a>
      }
    </OpinionWrapper>
  )
}