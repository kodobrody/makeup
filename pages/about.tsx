import About from "../components/about/about";
import { Navbar } from "../components/navbar/navbar";
import { request } from "../datocms";

const AboutPage = ({ certificates }: any) => {
  return (
    <>
      <Navbar />
      <About certificates={certificates} />
    </>
  );
}

const ALL_CERTS_QUERY = `query AllImagesQuery{
  allCertificates {
    title
    id
    image {
      url
      blurhash
      blurUpThumb
    }
  }
}`

export async function getStaticProps() {
  const certificates = await request({
    query: ALL_CERTS_QUERY
  })

  return {
    props: {
      certificates: certificates.allCertificates,
    }
  }
}

export default AboutPage;