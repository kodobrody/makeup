import { Opiniontype } from "."
import { Navbar } from "../components/navbar/navbar"
import { OpinionsPage } from "../components/opinionsPage/opinionsPage"
import { request } from "../datocms"

type PageProps = {
  opinions: Array<Opiniontype>
}

const Page = ({ opinions }: PageProps) => {
  return (
    <>
      <Navbar />
      <OpinionsPage opinions={opinions} />
    </>
  )
}

export default Page;

const ALL_OPINIONS_QUERY = `query AllOpinionsQuery{
  allOpinions {
    id
    comment
    nickname
    noinsta
  }
}`

export async function getStaticProps() {
  const opinions = await request({
    query: ALL_OPINIONS_QUERY
  })

  return {
    props: {
      opinions: opinions.allOpinions,
    }
  }
}