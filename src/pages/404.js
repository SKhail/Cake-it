import * as React from "react"

import Seo from "../components/SEO/SEO"

import Layout from "../components/Layout/Layout"


const NotFoundPage = () => (
<Layout>
<Seo title="404: Not found" />
<h1>404: Not Found</h1>
</Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
