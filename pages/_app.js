// _app.js

import React from 'react';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2976969141373216"
     crossorigin="anonymous"></script>
      <Component {...pageProps} />
    </>
  );
}
