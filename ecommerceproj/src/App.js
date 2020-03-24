import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import ChangeInfo from './Components/Account/ChangeInfo/ChangeInfo';
import Dashboard from './Components/Account/Dashboard/Dashboard';
import OrderHistory from './Components/Account/OrderHistory/OrderHistory';
import SingleOrder from './Components/Account/SingleOrder/SingleOrder';
import Checkout from './Components/Checkout/Checkout';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import OrderReview from './Components/OrderReview/OrderReview';
import Caramels from './Components/Products/Caramels/Caramels';
import HalfPound from './Components/Products/HalfPound/HalfPound';
import LePetite from './Components/Products/LePetite/LePetite';
import Licorice from './Components/Products/Licorice/Licorice';
import Lollipop from './Components/Products/Lollipop/Lollipop';
import OnePound from './Components/Products/OnePound/OnePound';
import Oreos from './Components/Products/Oreos/Oreos';
import PretzelRod from './Components/Products/PretzelRod/PretzelRod';
import Products from './Components/Products/Products';
import RockyRoad from './Components/Products/RockyRoad/RockyRoad';
import TwoPound from './Components/Products/TwoPound/TwoPound';
import Register from './Components/Register/Register';
import ShoppingBag from './Components/ShoppingBag/ShoppingBag';
import Thanks from './Components/Thanks/Thanks';
import { updateUser } from './redux/actions/actionCreators';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    // console.log(this.props);
    return (
      //!loading &&
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />

          <Route path='/dashboard' component={Dashboard} />
          <Route path='/changeinfo/:id' component={ChangeInfo} />
          <Route path='/orderhistory' component={OrderHistory} />
          <Route path='/singleorder/:id' component={SingleOrder} />

          <Route path='/shoppingbag' component={ShoppingBag} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/orderreview' component={OrderReview} />
          <Route path='/thanks' component={Thanks} />

          <Route path='/products' component={Products} />
          <Route path='/lepetite/:productid' component={LePetite} />
          <Route path='/halfpound/:productid' component={HalfPound} />
          <Route path='/onepound/:productid' component={OnePound} />
          <Route path='/twopound/:productid' component={TwoPound} />
          <Route path='/rockyroad/:productid' component={RockyRoad} />
          <Route path='/pretzelrod/:productid' component={PretzelRod} />
          <Route path='/lollipop/:productid' component={Lollipop} />
          <Route path='/oreos/:productid' component={Oreos} />
          <Route path='/caramels/:productid' component={Caramels} />
          <Route path='/licorice/:productid' component={Licorice} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default withRouter(connect(mapStateToProps, { updateUser })(App));
