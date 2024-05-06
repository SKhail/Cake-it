import * as React from "react"
import { StyleSheetManager } from 'styled-components'; // this is to Wrap your entire application with StyleSheetManager to fix prop passing to Dom elements within styled components  
import Seo from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import CTAArea from '../components/CTAArea/CTArea'
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost";

const IndexPage = () => ( 
<StyleSheetManager shouldForwardProp={(prop) => prop !== 'menuOpen'}> 
{/* this is to Wrap your entire application with StyleSheetManager to fix prop passing to Dom elements within styled components */}
<Layout>
  {/* Other components */}
  <Seo title="Home" />
      <Hero/>
      <CTAArea />
      <LatestBlogPost/>
</Layout>
</StyleSheetManager>


)

export default IndexPage
