import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Дом для жизни</title>
          <meta charSet="utf-8"/>
          <meta name="description" content="Вместе создаём дом для детей-сирот"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="theme-color" content="#000000"/>
          <meta
            name="description"
            content="Вместе создаём дом для детей-сирот"
          />
          <meta property="og:title" content="Дом для жизни"/>
          <meta property="og:description" content="Вместе создаём дом для детей-сирот"/>
          <meta property="og:url" content="https://tuesday.doroga-zhizni.org/"/>
          <meta property="og:type" content="website"/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://tuesday.doroga-zhizni.org/"/>
          <meta property="twitter:title" content="Дом для жизни"/>
          <meta property="twitter:description" content="Вместе создаём дом для детей-сирот"/>
          <link rel="apple-touch-icon" href="/favicon.ico"/>
          <link rel="icon" href="/favicon.ico"/>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-5BZL3LHP59"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5BZL3LHP59', { page_path: window.location.pathname });
            `,
            }}
          />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
