import './App.css';
import Button from './data/components/button/Button';
import Footer from './data/footer/Footer';
import Header from './data/header/Header';

function App() {
  return (
    <>
        <Header data="Header from prop"/>
        <Button />
        <Footer />
    </>
  );
}

export default App;
