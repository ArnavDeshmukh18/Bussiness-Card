
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';



export default function App() {
  return (
    <div className='main-Body'>
    <Header/>
    <MainContent/>
    <Footer/>
    </div>
  );
}


