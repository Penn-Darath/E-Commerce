import { useState } from 'react';
import Card from './components/Card/Card';
import Login from './components/HeaderSection/Login';
import NavBar from './components/HeaderSection/NavBar';
import NavbarMobile from './components/HeaderSection/NavbarMobile';

import SlideItems from './components/SlideSection/SlidesItems';
import Slide from './components/SlideSection/Slide';
import Title from './components/Items/Title';
import Item from './components/Items/Item';
import Slider from './components/SlideSection/Slider';
import Spacer from './components/Spacer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DetailPages from './pages/DetailPages';



const fakeimages = [
  '../images/anime4-removebg-preview.png',
  '../images/anime6.webp'
];

function App() {
  // const [quote, setQuote] = useState<any>([]);
  // const getQuote = () => {
  //   axios
  //     .get('http://charii.aipunk.org/api/user?limit=101')
  //     .then(res => {
  //       setQuote(res.data.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className=" bg-white w-screen pb-52">
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
        <Route path='/DetailPages' Component={DetailPages} />
      </Routes>
    </div>
  );
}

export default App;
