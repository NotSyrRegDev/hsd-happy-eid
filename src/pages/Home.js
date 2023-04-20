import React, { useEffect, useState }  from 'react';
import './Home.css';
import Footer from '../components/Footer';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ThreeDots from '../components/ThreeDots';



export const Home = () => {

  const giftsArray = [

    'HSD - خصم 10% متجر ستيكرات - @gheen.designer ',
      'HSD - متجر سرمد خصم 15% - @isarmadstore ',
      'HSD - متجر باندا خصم 10% - @matjarpanda ',
    'HSD - منصة شغوف DOYH خصم 5% - @shagufsa ',

  ]

  const [showEmail  , setShowEmail] = useState(true);

  const [showGift  , setShowGift ] = useState(false);

  const [showHash  , setShowHash ] = useState(false);

  const [threeDotsShow  , setThreeDotsShow ] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      
      setShowEmail(!showEmail);
      setShowGift(!showGift);
      setShowHash(!showGift);
      document.querySelector('.main_get_started').classList.add('ready');
    

    }, 1200);

    setTimeout(() => {
      setThreeDotsShow( !threeDotsShow );
    }, 2200);

  } , []);

  const genrateRandom = () => {
    let rand = Math.random() * 3;

  
    rand = Math.floor(rand); // 99
  
    return rand;
  }

 
  return (
    <div className='main_get_started' >
      
     <div className="flexing_getstarted">

     <img src="/images/icons/logo.png" alt="" className="started_mylcafe " />

    <div className="mt-2"></div>

    {showEmail && (
      <img src="/images/icons/email.png" alt="" className="email_icon_gift" />
    )}

    {showGift && (

      <>
      {threeDotsShow ? (

      <ThreeDots />
      ) : (
        <div className="email_opened_div">
      <p className="gift_para"> { giftsArray[ genrateRandom() ] } </p>
      <img src="/images/icons/email-opened.png" alt="" className="" />
      </div>
      )}



      </>
   
     
    )}

 

    {showHash && (
      <h1 className="text-center mt-1  section_headline">  شارك عيديتك عبر هاشتاق  <br /><span className="color_red">#HSDEIDYA</span></h1>
    )}
     

    
   

      {showEmail && (
        <img src="/images/icons/rocket.png" alt="" className="rocket_icon" />
      )}
   
       
      <h1 className="text-center mt-1 section_headline">العيد فرحة <span className="color_red">٢٠٢٣</span></h1>

     </div>

 


    </div>
  )
}
