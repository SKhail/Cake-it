import * as React from "react"
// import {Link} from "gatsby"
import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Hero from '../components/Hero/Hero'




const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>Start here!</p>
    <Hero/>
  </Layout>
)


export default IndexPage
