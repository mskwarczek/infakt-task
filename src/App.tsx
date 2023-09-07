import { ThemeProvider } from 'styled-components';

import Router from './router/Router';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Header />
        <Router />
      </ThemeProvider>
    </div>
  );
};

export default App;
