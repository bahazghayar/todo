
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

import LoginProvider from './components/auth/context.js';

import App from './app.js';


const Main = () => {
  return <App />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(
	<LoginProvider>
		<Main />
	</LoginProvider>,
	rootElement,
);