import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"

const About:React.FC<PageProps> = () =>{
return(
    <Layout>
       <h1>
        I am about page
       </h1>
    </Layout>
)
}

export default About