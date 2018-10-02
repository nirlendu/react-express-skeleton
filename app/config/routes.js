/**
 * Copyright - WebApp
 */

import React from 'react'

import {Route, Router, IndexRoute, browserHistory} from 'react-router'

import App from 'app/pages/App'

import IndexPage from 'app/pages/index/Page'

if (typeof window === 'object') {
    function createElement(Component, props) {
        return <Component {...props} {...window.PROPS} />;
    }
}

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={IndexPage}/>
		</Route>
    </Router>
)

module.exports = {
  routes: routes
}
