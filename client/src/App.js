import React from "react";
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
import Home from "./pages/home";
import Clothes from "./pages/clothes";
import Signin from './pages/signIn'
import Navbar from "./components/Navbar";
import "./styles/App.css";

// Material Default theme and personalization
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import customTheme from "./utils/theme";
 
const theme = createMuiTheme(customTheme);
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ropa" component={Clothes} />
            <Route exact path= "/signin" component={Signin} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
