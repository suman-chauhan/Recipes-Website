import React from "react"
import { Link, graphql } from "gatsby"
import setupTags from "../utils/setupTags"
import Layout from "../componant/Layout"
import SEO from "../componant/SEO"
const tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <SEO title="Tags"/>
      <main className="page">
        <section className="tags-page">
            {newTags.map((tag,index)=>
            {
                const [text,value]=tag;
                return(
                    <Link to={`/tags/${text}`} className="tag">
                        <h5>{text}</h5>
                        <p>{value} recipe</p>
                    </Link>
                )
            })}
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default tags
