import '../styles/globals.css'
import Defaultlayout from '../components/Defaultlayout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Defaultlayout>
      <Component {...pageProps} />
    </Defaultlayout>
  );
}

export default MyApp
