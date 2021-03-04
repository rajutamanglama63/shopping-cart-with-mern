import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';

import './App.css';

// components
import Navbar from './components/Navbar';
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';

// screens
import Home from './components/screens/Home';
import Cart from './components/screens/Cart';
import Product from './components/screens/Product';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Switch>
        <main className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:id' component={Product} />
          <Route exact path='/cart' component={Cart} />
        </main>
      </Switch>
    </Router>
  );
}

export default App;
