import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Meme Portfolio</title>
        <meta name="description" content />
        <meta name="author" content />
        <meta name="keywords" content />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          rel="meme-icon"
          sizes="180x180"
          href="assets/img/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.ico"
        />
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        <link href="assets/css/responsive.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="assets/js/skrollr.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-progressbar/0.9.0/bootstrap-progressbar.min.js"></script>
        <script src="assets/js/jquery.countTo.min.js"></script>
        <script src="assets/js/script.js"></script>
      </body>
    </Html>
  );
}
