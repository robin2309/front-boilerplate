import React from 'react';
import {Route} from 'react-router-dom';
import Home from 'Containers/Home/Home';
import Page from 'Containers/Page/Page';

export default (props) => {
	return (
		<div>
			<Route path='/home' component={Home} />
			<Route path='/page' component={Page} />
		</div>
	);
};