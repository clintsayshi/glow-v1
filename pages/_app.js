import Script from 'next/script'
import '../styles/globals.css'

const analyticsID = process.env.NEXT_PUBLIC_ANALYTICS_ID

function MyApp({ Component, pageProps }) {

  return 
  <>
    <Script
        id="10"
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsID}`}
      />
      <Script id="20">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${analyticsID}');`}
    </Script>
    <Component {...pageProps} />
  </>
}

export default MyApp
