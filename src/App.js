import Header from './components/Header';
import HeaderMenu from './components/HeaderMenu';
import ServiceList from './components/ServicesList';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import itemsData from './data/itemsData';


// import image1 from './img/ch_ex1.jpg';
// import image2 from './img/ch_ex2.jpg';
// import image3 from './img/ch_ex3.jpg';
// import image4 from './img/ch_ex4.jpg';
// import image5 from './img/ch_ex5.jpg';
// import image6 from './img/ch_ex6.jpg';
// import image7 from './img/ch_ex7.jpg';
// import image8 from './img/ch_ex8.jpg';
// import image9 from './img/ch_ex9.gif';

function App() {

  // const test = [
  //   {
  //     img: image1,
  //     price: 1200,
  //     description: 'Тестовое описание'
  //   },
  //   {
  //     img: image2,
  //     price: 1234,
  //     description: 'Тестовое описание3456565'
  //   },
  //   {
  //     img: image3,
  //     price: 1200,
  //     description: 'Тестовое описание343434'
  //   },
  //   {
  //     img: image4,
  //     price: 12040,
  //     description: 'Тестовое описание'
  //   },
  //   {
  //     img: image5,
  //     price: 12002,
  //     description: 'Тестовое описание'
  //   },
  //   {
  //     img: image6,
  //     price: 120033,
  //     description: 'Тестовое описание'
  //   },
  //   {
  //     img: image7,
  //     price: 5200,
  //     description: 'Тестовое описание'
  //   },
  //   {
  //     img: image8,
  //     price: 1230,
  //     description: 'Тестовое описание'
  //   },
  //   {
  //     img: image9,
  //     price: 12030,
  //     description: 'Тестовое описание'
  //   },

  // ]


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
