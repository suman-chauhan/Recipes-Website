import React  from "react"
import Layout from "../componant/Layout"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/main.css"
import AllRecipes from "../componant/AllRecipes"
import SEO from "../componant/SEO"
// import FetchData from "../example/fetchData"
const index = () => {
  return (
    <Layout >
      <SEO title="Home" description="this is home description"/>
    <main className="page">
      <header className="hero">
        <StaticImage src="../assets/images/main.jpeg" 
        alt="hero"
        className="hero-img"
        placeholder="tracedSVG"
        layout="fullWidth"
        />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h1>No Fluff, Just Recipes</h1>
            </div>
          </div>
      </header>
       {/* <FetchData/> */}
       <AllRecipes/>
    </main>
   
  </Layout>
  )
}

export default index




