import React from 'react'

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
    <div id='footerDivId' className=''>
    <div id="footerH1">
      <p id='footerHeading'></p>
      <p id='copyright'>© Copyright {date}, Sona Papers Pvt. Ltd.
</p>
    </div>
    </div>
    <div id='developerName'>
    <p>Developed By Rakesh Singh</p>
    </div>
    </>
  )
}
