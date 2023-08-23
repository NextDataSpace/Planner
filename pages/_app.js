// pages/_app.js
import React from 'react';
import '../styles/global.css'; // Import your global styles
import AppContextProvider from '../context/AppContextProvider'; // Import your context provider if applicable

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      {/* You can add additional layout components here */}
      <div>
        <header>
          {/* Your site header */}
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
          {/* Your site footer */}
        </footer>
      </div>
    </AppContextProvider>
  );
}

export default MyApp;
