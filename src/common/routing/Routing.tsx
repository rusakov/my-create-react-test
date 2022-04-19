import React, { FC } from 'react'
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom'
import { AboutLoadable } from 'components/About/AboutLoadable'
import { TopicsLoadable } from 'components/Topics/TopicsLoadable'
import { HomeLoadable } from 'components/Home/HomeLoadable'
import { CreateBrowserHistory } from 'common/reducer/function/createStore'

export const Routing: FC<{ history: CreateBrowserHistory }> = ({ history }) => {
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
            <AboutLoadable />
          </Route>
          <Route path="/topics">
            <TopicsLoadable />
          </Route>
          <Route path="/">
            <HomeLoadable />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
