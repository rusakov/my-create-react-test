import React from 'react'
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom'
import { About } from 'components/About/About'
import { Topics } from 'components/Topics/Topics'
import { Home } from 'components/Home/Home'

export const Routing = ({ history }) => {
  return (
    <Router history={history}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
