import React from 'react';
import './Footer.css';


const Footer = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className='section mt-1 mb-1 fotter_section' >
        <footer>
           <h1 className="text-center mt-1 section_headline">العيد فرحة <span className="color_red">٢٠٢٣</span></h1>


           {/* <div className="d-flex-c f-sp top_footer_section">

           <div className='text-center ' style={{ cursor: 'pointer' }}  onClick={() => openInNewTab('https://notregsyrdev.web.app/') } >
        
        <p className="section_headline_sm">بني ب❤️ بواسطة    
        <span  >   </span>
        <p> HSD فريق عمل </p>
        </p>
        </div>



          
              <div className="d-flex-c div__footer">

              <h1 className="section_headline_sm" > ❤️عيدية أعضاء النادي</h1>
            
           
              </div>


           </div> */}

          

        </footer>
    </div>
  )
}

export default Footer