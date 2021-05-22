
import React, { useContext } from 'react';

import { If, Else, Then } from 'react-if';
import Auth from './components/auth/auth.js';
import { LoginContext } from './components/auth/context';

import ToDo from './components/todo/todo.js';
import NavBar from './components/todo/navBar.js';

const EditLink = () => {
  return (
    <Auth capability="update">
      <span>Edit</span>
    </Auth>
  );
};

const DeleteLink = () => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
};

const App = () => {
  const loginContext = useContext(LoginContext);

  return (
    <>
      <NavBar />
      <EditLink />
      <DeleteLink />
      <If condition={loginContext.loggedIn}>
        <Then>
          <ToDo />
        </Then>
        <Else>
          <div></div>
        </Else>
      </If>
    </>
  )

}

export default App;


