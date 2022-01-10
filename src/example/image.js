import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
const Image = () => {
    return (
        <Wrapper>
         <article>
             <h4>constrained / default</h4>
         <StaticImage src='../assets/images/recipes/recipe-1.jpeg' alt='food'
          height={200}
           placeholder="tracedSVG"
            layout="constrained"
            as="section"
            className='example-img'
           />
         </article>

         <article>
             <h4>Fixed</h4>
         <StaticImage src='../assets/images/recipes/recipe-1.jpeg' alt='food'
          height={200}
           placeholder="blurred"
            layout="fixed"
            as="div"
            className='example-img'
           />
         </article>

         <article>
             <h4>fullWidth</h4>
         <StaticImage src='../assets/images/recipes/recipe-1.jpeg' alt='food'
           placeholder="dominantColor"
            layout="fullWidth"
            as="article"
            className='example-img'
           />
         </article>

        </Wrapper>
    )
}
const Wrapper = styled.section`
 width: 70vw;
 margin: 0 auto;
 display: grid;
 text-align: center;
 gap: 2rem;

 article
 {
     border: 2px solid black;

 } 
 .example-img 
 {
     border-radius: 1.5rem;
 }
 /* @media (min-width:992px)
 {
     grid-template-columns: 1fr 1fr 1fr;
 } */
`
export default Image
