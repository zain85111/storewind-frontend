import { useState } from 'react';
import Layout from '../components/Layout'
import '../styles/globals.css'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}


function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      // <SessionProvider>
        <Component {...pageProps} />
      // </SessionProvider>
    );
  }

  return (
    // <SessionProvider>
    <SafeHydrate>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </SafeHydrate>
    // </SessionProvider>
  );
}

export default MyApp
