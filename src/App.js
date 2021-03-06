import Header from './components/Header';
import HeaderMenu from './components/HeaderMenu';
import ServiceList from './components/ServicesList';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import itemsData from './data/itemsData';

function App() {

  return (
    <Router>
      <div className="App">
        <HeaderMenu />
        <Header />
        <Switch>
          <Route path="/baloons" exact>
            <ServiceList />
          </Route>
          <Route exact path="/child">
            <Catalog itemsData={itemsData.child} header={'Примеры украшения дестких праздников'}/>
          </Route>
          <Route exact path="/wedding">
            <Catalog itemsData={itemsData.wedding} header={'Примеры украшения свадеб'}/>
          </Route>
          <Route exact path="/business">
            <Catalog itemsData={itemsData.business} header={'Примеры украшения магазинов'}/>
          </Route>
          <Route exact path="/birthday">
            <Catalog itemsData={itemsData.birthday} header={'Примеры украшения залов на день рождения'}/>
          </Route>
          <Route exact path="/bouqet">
            <Catalog itemsData={itemsData.bouqet} header={'Доставка букетов из шаров'}/>
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/catalog/:id" component={Product} />
          <Route path="/cart">
            <Cart />
          </Route> */}
          {/* <Route exact path="/404">
            <PageDontExist />
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route> */}
        </Switch>
        {/* <ServiceList /> */}
        {/* <Catalog /> */}
        {/* <Route path="/main" component={Catalog} />  */}
        <Footer />
      </div>
    </Router>

  );
}

export default App;
