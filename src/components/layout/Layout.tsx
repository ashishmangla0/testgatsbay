import { graphql, PageProps, useStaticQuery } from "gatsby"
import PropTypes,{node} from "prop-types"
import * as React from "react"

import Header from "../header"

type LayoutType = {
    children?: React.ReactNode
    | React.ReactNode[]
    | React.ReactElement
    | React.ReactElement[]
    | JSX.Element
    | JSX.Element[]

}
const Layout: React.FC<LayoutType> = (props: LayoutType) => {
    const { children } = props;
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

            <main>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: node.isRequired,
  }
export default Layout