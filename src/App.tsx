import { ThemeProvider } from 'styled-components';

import AccountantsView from './views/AccountantsView/AccountantsView';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Header />
        <AccountantsView />
      </ThemeProvider>
    </div>
  );
};

export default App;
