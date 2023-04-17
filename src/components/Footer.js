import React from 'react';
import './Footer.css';


const Footer = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className='section mt-3 mb-3 fotter_section' >
        <footer>
           <h1 className="text-center mt-1 mb-5 section_headline">العيد فرحة <span className="color_red">٢٠٢٣</span></h1>
           <div className="d-flex-c f-sp top_footer_section">

           <div className='text-center ' style={{ cursor: 'pointer' }}  onClick={() => openInNewTab('https://notregsyrdev.web.app/') } >
        
        <p className="section_headline_sm">بني ب❤️ بواسطة    
        <span  >   </span>
        <p> HSD فريق عمل </p>
        </p>
        </div>

        {/* <div className="text-center" onClick={() => window.scrollTo(0 , 0) } >
        <img src="/images/icons/logo-footer.jpeg" alt="" className="icon_big" />
        </div> */}

          
              <div className="d-flex-c div__footer">

              <h1 className="section_headline_sm" > ❤️عيدية أعضاء النادي</h1>
            
           
              </div>


           </div>

           {/* <div className="icons_footer_div mt-3">

              <div className="single_icon_footer">
                <img src="/images/social_icons/snapchat.png" onClick={() => openInNewTab('https://t.snapchat.com/pqlrqe6G')} alt="" />
              </div>

              <div className="single_icon_footer">
                <img src="/images/social_icons/instagram.png" onClick={() => openInNewTab('https://www.instagram.com/mylcafe21/')} alt="" />
              </div>

              <div className="single_icon_footer">
                <img src="/images/social_icons/location-pin.png" onClick={() => openInNewTab('https://goo.gl/maps/QXVmQseoNvJTr7Cq8')} alt="" />
              </div>

              <div className="single_icon_footer">
                <img src="/images/social_icons/call.png" onClick={() => openInNewTab('tel:0553495541')} alt="" />
              </div>

           </div> */}

        </footer>
    </div>
  )
}

export default Footer