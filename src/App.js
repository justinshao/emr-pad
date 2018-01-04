import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppRouter from './AppRouter';
import './deviceType';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <AppRouter/>
  </MuiThemeProvider>
);

export default App;
