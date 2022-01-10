import React from "react"
import AllRecipes from "../componant/AllRecipes"
import Layout from "../componant/Layout"
import SEO from "../componant/SEO"

const recipes = () => {
  return (
    <Layout>
      <SEO title="Recipe"/>
    <main className="page">
    <AllRecipes />
    </main>
    </Layout>
  )
}

export default recipes
