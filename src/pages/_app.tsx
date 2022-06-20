import { AppProps } from 'next/app';
import theme from '../styles/theme';
import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';

import { Toaster } from 'react-hot-toast';
import NextNProgress from "nextjs-progressbar";

/* import { Provider } from "react-redux";
import store from '../redux/store'
 */
import { Provider } from 'react-redux';
//import { store } from '../app/store'; // Counter
import { store, persistor } from '../redux/store'; // Cart
import { PersistGate } from 'redux-persist/integration/react';

//import { queryClient } from '../services/queryClient';


//Ferramante do devtools
import { ReactQueryDevtools } from 'react-query/devtools'

import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient()


function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <NextNProgress
              color={theme.secondary}
              startPosition={0.4}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
              options={{
                showSpinner: false
              }}
            />
            <Toaster position="bottom-right" />
            <Component {...pageProps} />
            <GlobalStyles />
          </ThemeProvider>
        </PersistGate>
      </Provider >
      {/*   <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;