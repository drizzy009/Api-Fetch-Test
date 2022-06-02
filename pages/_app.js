import "../styles/globals.css";
import Defaultlayout from "../components/Defaultlayout";
import Head from "next/head";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Defaultlayout>
      <Component {...pageProps} />
    </Defaultlayout>
  );
}

export default MyApp;
