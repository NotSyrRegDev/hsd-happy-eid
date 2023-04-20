import React from 'react';
import './GetStarted.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const GetStarted = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className='main_get_started' >

    <div className="flexing_getstarted">

        <img src="/images/icons/logo.png" alt="" className="started_mylcafe" />

    

    <div className="mt-5"></div>

    <h1 className="headline_main">  عيديتك أحلى مع  </h1>
    <h1 className="headline_main color_red">    نادي هواوي  </h1>

    <div className="mt-3"></div>
   
    <Link to="/home" className='w-50' >
    <button className="hsd_btn w-50">   أفتح العيدية</button>
    </Link>
   
  

    </div>

    <Footer />
    
    </div>
  )
}

export default GetStarted