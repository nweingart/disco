// library imports
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core';

// auth and spotify imports
import { accessToken, getAccount } from './spotify/SpotifyAuth';

// global imports
import Navbar from './components/global/navbar/Navbar';

// screen imports
import Dashboard from './screens/dashboard/Dashboard';
import SignedOut from './screens/dashboard/SignedOut';
//import Festival from "./festival/Festival";


// style imports
import { purple } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple
  }
})

const App = () => {
  const [token, setToken] = useState(null)
  const [account, setAccount] = useState(null);

// auth functions
  useEffect(() => {
    if (accessToken) {
      setToken(accessToken)
    }

  // gets the current users profile 
  const getAccountData = async () => {
    try {
      const { data } = await getAccount();
      setAccount(data);
    } catch (error) {
      console.log(error)
    }
  }
  getAccountData();

  }, [setToken])

  
  return (
    <div>
      {
        !token ? (
          <SignedOut />
        ) : (
        <ThemeProvider theme={theme}>
          <Router>
          <Navbar account={account}/>
            <Switch>
              <Route exact path='/'>
                <Dashboard />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
        )
      }
    </div>
    );
};

export default App;
