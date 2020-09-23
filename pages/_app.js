import App, { Container } from 'next/app';
import 'antd/dist/antd.css';
import '../static/style/pages/comm.css';
import NextSeo from '../pages/seo/defaultSEO'
import SEO from '../pages/seo/base-seo'
import MyLayout from './components/homeLayout/myLayout'
class MyApp extends App {
    render() {
      const {
        Component, pageProps, mobxStore, router
      } = this.props;
      return (
        <Container>
          <NextSeo config={SEO} />
              <Component {...pageProps} />
        </Container>
      );
    }
  }

export default MyApp