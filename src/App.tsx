import Menu from './components/Menu';
import Page from './pages/Page';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import List from './pages/List';
import Details from './pages/Details';
import Input from './pages/Input';
import Corona from './pages/Corona';
import Dashboard from './pages/Dashboard';

import React, { useEffect, useState } from 'react';
import { IonApp, IonRouterOutlet, IonSpinner, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { getCurrentUser } from './firebaseConfig'

const RoutingSystem: React.FC = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/page/:name" component={Page} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/product" component={Product} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/payment" component={Payment} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/list" component={List} exact />
          <Route path="/details/:name" component={Details} exact />
          <Route path="/input" component={Input} exact />
          <Route path="/corona" component={Corona} exact/>
          <Route path="/dashboard" component={Dashboard} exact/>

          <Redirect from="/" to="/login" exact />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>

  )
}

const App: React.FC = () => {
  const [busy, setBusy] = useState(true);
  useEffect(() => {
    getCurrentUser().then(user => {
      if(user){
        window.history.replaceState({},'','/dashboard')
      }else{
        window.history.replaceState({},'','/')
      }
      setBusy(false);
    })
  }, [])

  return (
    <IonApp>
      {busy ? <IonSpinner /> : <RoutingSystem />}
    </IonApp>
  );
};

export default App;
