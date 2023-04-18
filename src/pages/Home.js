import React  from 'react';
import './Home.css';
import Footer from '../components/Footer';

export const Home = () => {

 
  return (
    <div className='main_get_started' >
      
     <div className="flexing_getstarted">

     <img src="/images/icons/logo.png" alt="" className="started_mylcafe mb-3" />

      <img src="/images/icons/email.png" alt="" className="email_icon_gift" />

      <div className="mt-3"></div>
      <img src="/images/icons/rocket.png" alt="" className="rocket_icon" />

     </div>

        <Footer />


    </div>
  )
}
