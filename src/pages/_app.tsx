import { AppProps } from 'next/app';
import theme from '../styles/theme';
import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';

/* import { Provider } from "react-redux";
import store from '../redux/store'
 */
import { Provider } from 'react-redux'
//import { store } from '../app/store'; // Counter
import { store, persistor } from '../redux/store'; // Cart


import { PersistGate } from 'redux-persist/integration/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </PersistGate>
    </Provider >
  );
}

export default App;