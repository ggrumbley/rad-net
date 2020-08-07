import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Rad NET</title>
          <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
          />

          <link rel="stylesheet" type="text/css" href="https://newcss.net/theme/terminal.css" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
