import React from 'react'
import aboutimage1 from '../../icons/aboutimage1.svg'
import aboutimage2 from '../../icons/aboutimage2.svg'
import aboutimage3 from '../../icons/aboutimage3.svg'
import aboutimage4 from '../../icons/aboutimage4.svg'
import aboutimage5 from '../../icons/aboutimage5.svg'
import aboutimage6 from '../../icons/aboutimage6.svg'
import aboutimage7 from '../../icons/aboutimage7.svg'


const AboutUs = () => {
  return (
    <div className='flex flex-col items-center justify-center py-4 px-8 gap-10'>
      <div className='w-[1440px] h-[132px] bg-[#FF9B05] flex flex-col justify-center items-center mb-5'>
  <h2 className='text-white text-center text-5xl'>About Us</h2>
</div> 
        
        <div className='flex flex-row gap-3'>
        <div className=''>
          <img src={aboutimage1} alt=''/>
          <img src={aboutimage2} alt=''/>
        </div>
         <div className=''>
          <h2 style={{width: '428px',
height: '50px',
top: '487px',
left: '722px',
fontFamily: 'Montserrat',
fontSize: '35px',
fontWeight: '700',
lineHeight: '43px',
letterSpacing: '0em',
textAlign: 'left',
color: '#FF9B05'
}}>What is ServiceXpress</h2>
          <p className='w-[642px] h-[383px]' style={{fontFamily: 'Montserrat',
fontSize: '24px',
fontWeight: '500',
lineHeight: '29px',
letterSpacing: '0em',
textAlign: 'justified',
top: '557px',
left: '730px'

}}>ServiceXpress is typically refers to a delivery service that uses different mode of transportation for delivering packages, goods, or items from one location to another. We provide a delivery service which often used for local and urban deliveries, where users can navigate through to get access to needs and deliver without ease.  We also provide GPS tracking, to get real-time updates on delivery status and improve customer convenience.<br/><br/>

The service is designed to meet the urgent needs of customers who require their items to be delivered as quickly as possible.

</p>
         </div>
          </div> 


          <div className='flex flex-row gap-3'>
            <div>
            <h2 style={{width: '428px',
height: '50px',
top: '487px',
left: '722px',
fontFamily: 'Montserrat',
fontSize: '35px',
fontWeight: '700',
lineHeight: '43px',
letterSpacing: '0em',
textAlign: 'left',
color: '#FF9B05'}}>What We Do</h2>
            <p className='w-[642px] h-[383px]' style={{fontFamily: 'Montserrat',
fontSize: '24px',
fontWeight: '500',
lineHeight: '29px',
letterSpacing: '0em',
textAlign: 'justified',
top: '557px',
left: '730px'

}}>
            We provide easy access for users to easily access these services: Car Repair Services, Verified Part Sellers, Home Tutors, Grocery shopping, Restaurant Services, Hair Dressing, Make Up, Laundry Services, Veterinary Services and many more. We give guaranteed delivery times, allowing customers to choose a specific delivery window or time frame for their shipments.<br/><br/>

We’re known for its reliability and efficient delivery services. Keep in mind that all vendors or brands that are registered with us are verified.
            </p>
            </div>
            <div style={{width: '554px',
height: '554px',
top: '1056px',
left: '804px'
}}>
              <img src={aboutimage3} alt=''/>
            </div>
          </div>

          <div className='flex flex-row gap-3'>
          <div>
            <img src={aboutimage4} alt=''/>
          </div>
            <div>
<h2 style={{width: '428px',
height: '50px',
top: '487px',
left: '722px',
fontFamily: 'Montserrat',
fontSize: '35px',
fontWeight: '700',
lineHeight: '43px',
letterSpacing: '0em',
textAlign: 'left',
color: '#FF9B05'}}>Why choosing us?</h2>
<p className='w-[642px] h-[383px]' style={{fontFamily: 'Montserrat',
fontSize: '24px',
fontWeight: '500',
lineHeight: '29px',
letterSpacing: '0em',
textAlign: 'justified',
top: '557px',
left: '730px'

}}>Diverse Product Categories: These apps are not limited to just one type of delivery. They can cover a wide range of products, including groceries, restaurant meals, Laundry, Car Repair, and more. This versatility makes them suitable for various needs.
Accessibility: ServiceXpress apps are usually available 24/7, making them accessible at any time, day or night, to accommodate your needs.
Speed and Convenience: ServiceXpress are designed to provide fast and convenient delivery services.  This is especially useful for time-sensitive deliveries, such as food delivery,  or last-minute request.</p>
            </div>
            
          </div>
          <div className='bg-[#FF9B05] w-[1442px] h-[274px]'>
            <h2 style={{textAlign:'center',
              Width: '316px',
Height: '50px',
Top: '2334px',
Left: '565px', 
font: 'Montserrat',
fontWeight:'700',
fontSize: '40px',
color: 'white',
LineHeight: '48.76px'}}>ServiceXpress</h2>
            <p style={{Width:'1315px', Height:'116px', Top:'2401px', Left:'65px', padding:'8px', 
font:'Montserrat', fontWeight:'500', fontSize:'24px', LineHeight:'29.26px', textAlign:'Justified', color:'white'}}>
            &ldquo; It’s a fast and expedited delivery service designed to link users to vendor easily without stress. This type of service is characterized by its emphasis on speed and efficiency.  
            ServiceXpress play a vital role in the logistics and supply chain industry, ensuring that time-sensitive goods and service request reach their destinations efficiently.
            Businesses and individuals alike rely on ServiceXpress for a wide range of needs,&rdquo; 
            </p>
            </div>
            <div className='flex flex-col bg-[#000000] w-[1281px] h-[457px] rounded-3xl px-8'>
              <h2 className='text-white' style={{Width:'589px', Height:'116px', Top:'2730px', Left:'133px',
            Font:'Inter',
            fontWeight:'600',
            fontSize:'48px',
            LineHeight:'58.09px'}}>
              Enjoy more of our service<br/>
through app
              </h2>
              <p className='text-white' style={{Width:'704px', Height:'58px',
Top:'2889px',
Left:'133px',
Font:'Inter',
fontWeight:'400',
fontSize:'24px',
LineHeight:'29.05px'}}>
              Get our mobile app on any device you use on the App Store or<br/>
Google Playstore</p>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row p-3 gap-8 mt-10'>
<img src={aboutimage5} alt=''/>
<img src={aboutimage6} alt=''/>
</div>
<div className='flex justify-end' style={{marginTop: '-10rem'}}>
  <img src={aboutimage7} alt=''/>
</div>
            </div>
            </div>
    </div>
  )
}

export default AboutUs