import { Geist } from "next/font/google";
import '../styles/globals.css'

const geist = Geist({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={geist.className}>
      <Component {...pageProps} />
    </div>
  )
}