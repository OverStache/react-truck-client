import React, { Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Truck from './pages/truck/index'
import Brand from './pages/brand/index'
import Detail from './pages/brand/detail';


function App() {
  return (
    <Router>
        <Fragment>
        <div className="bg-gradient-to-r from-blue-800 to-blue-500">
          <div className="container mx-auto h-14 grid gap-4 grid-flow-col auto-cols-max content-center">
              <p className='mr-7 font-semibold text-xl'>Mein LKW</p>
              <Link to="/">Truck</Link>
              <Link to="/brand">Brand</Link>
          </div>
        </div>
        <div className="container mx-auto">
          <Route path="/" exact component={Truck}/>
          <Route path="/brand" exact component={Brand}/>
          <Route path="/brand/:slug" component={Detail}/>
        </div>
        </Fragment>
      </Router>
      
  );
}

export default App;
