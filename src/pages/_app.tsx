import Global from "../styles/globalStyle";
import {AnimatePresence} from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
      <Global/>
    </AnimatePresence>

  )
}

export default MyApp
