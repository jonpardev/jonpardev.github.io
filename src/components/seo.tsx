import React from "react";
import { useStaticQuery, graphql } from "gatsby";

type SeoProps = {
  description?: string;
  title: string;
  children?: React.ReactNode;
}

type DataType = {
  site: {
    siteMetadata: {
      title: string,
      description: string,
      author: string,
    }
  }
}

function Seo({ description, title, children }: SeoProps) {
  const { site } = useStaticQuery<DataType>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
