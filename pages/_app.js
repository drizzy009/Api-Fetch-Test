import '../styles/globals.css'
import Defaultlayout from '../components/Defaultlayout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Defaultlayout>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Component {...pageProps} />
    </Defaultlayout>
  );
}

export default MyApp
