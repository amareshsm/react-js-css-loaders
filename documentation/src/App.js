import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Landing from './components/LandingPage/Landing'
import Installation from './components/Installation'
import ESM from './components/ESM'
import CJS from './components/CJS'
import UMD from './components/UMD'
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route
            path="/installation"
            exact
            component={Installation}
          />
          <Route path="/esm" exact component={ESM} />
          <Route path="/cjs" exact component={CJS} />
          <Route path="/umd" exact component={UMD} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
