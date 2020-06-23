import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import GuestList from './components/GuestList'
import CreateGuest from './components/CreateGuest'
import SearchComponent from './components/SearchComponent/SearchComponent';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path ="/" component={GuestList} />
        <Route exact path ="/create" component={CreateGuest} />
        <Route exact path="/search" component={SearchComponent} />
      </Switch>
    </div>
  );
}

export default App;
