import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero';
import Category from './components/Navbar/Category';
import Category2 from './components/Navbar/Category2';
import Services from './components/Navbar/Services';
import Banner from './components/Navbar/Banner';
import headphone from './assets/hero/headphone.png'
import Product from './components/Navbar/Product';
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png';
import Blogs from './components/Navbar/Blogs';
import Partner from './components/Navbar/Partner';
import Footer from './components/Navbar/Footer';
import Popup from './Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerData = {
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '10 Jan to 28 Jan',
  image: headphone,
  title2: 'Air Solo Bass',
  title3: 'Winter Sale',
  title4: "Exclusive Deal – Limited Time Offer!",
  bgColor: '#f42c37',
};

const BannerData2 = {
  discount: '30% OFF',
  title: 'Happy Hours',
  date: '14 Jan to 28 Jan',
  image: smartwatch2,
  title2: 'Smart Solo',
  title3: 'Winter Sale',
  title4: "Exclusive Picks – Grab Yours Now!",
  bgColor: '#2dcc6f',
};

export const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  },[]);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData} />
      <Product/>
      <Banner data={BannerData2} />
      <Blogs />
      <Partner/>
      <Footer/>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App