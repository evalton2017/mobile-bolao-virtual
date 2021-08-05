import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from './src/context/authContext';
import { ThemeProvider, Header} from 'react-native-elements';
import Routes from './src/navigation';
import './src/locales/i18n';

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <ThemeProvider>
        <Header />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
