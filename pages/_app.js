import Layout from '../components/layout/layout';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',

  transition: transitions.SCALE,
};

function MyApp({ Component, pageProps }) {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AlertProvider>
  );
}

export default MyApp;
