import Header from './components/Header';
import HeaderMenu from './components/HeaderMenu';
import ServiceList from './components/ServicesList';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Header />
      <ServiceList />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
