// Modules //
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  // Redirect,
  // useLocation
} from "react-router-dom";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// Components //
import FourZeroFour from "./components/404/404";
import Welcome from "./components/Welcome/Welcome";
// Stylesheets // 
import './App.css';
// Fonts //

function App() {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Welcome />
          </Route>
          {/* 404 */}
          <Route path="*" >
            <FourZeroFour />
          </Route>
        </Switch>
      </Router>
    </LocalizationProvider>
    </>
  );
}

export default App;
