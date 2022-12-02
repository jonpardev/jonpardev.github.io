import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="min-w-full min-h-full flex justify-center items-center">
      <div className="text-center">
        <h1 className="font-black text-9xl leading-none">404</h1>
        <h2 className="uppercase font-bold text-xl">Page not found</h2>
        <span
          onClick={() => navigate(-1)}
          className="active:underline hover:underline cursor-pointer">Back</span>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
