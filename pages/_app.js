import Layout from '../components/Layout'
import '../styles/globals.css'
import { AuthProvider } from '../helper/AuthProvider';

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <AuthProvider>
          <Component {...pageProps} />

      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>

    </AuthProvider>
  );
}

export default MyApp
