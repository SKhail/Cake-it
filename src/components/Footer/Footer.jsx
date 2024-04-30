import React from 'react'
import { Wrapper } from '../../components/Footer/Footer.styles'
// import Logo from '../../images/logo.svg';


const Footer = () => (
 <Wrapper>

    <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Cake it</p>
    <p>Do you want to get updates and information about Cake it?</p>
    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
    <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>
    </div>
  

  </Wrapper>

)


export default Footer