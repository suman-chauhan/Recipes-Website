import React from 'react'
import {useStaticQuery , graphql } from 'gatsby';
import { GatsbyImage , getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`
const Gallary = () => {
  const data =useStaticQuery(query);
  const nodes = data.allFile.nodes;
    return (
        <Wrapper>
          {nodes.map((image,index)=>
          {
            const {name}=image;  
            const ImagePath = getImage(image);
            return(
              <article key={index}>
                <GatsbyImage className='img' image={ImagePath} alt={name}/>
                <p>{name}</p>
              </article>
            )
          })}
        </Wrapper>
    )
}
const Wrapper = styled.section` 
display: flex;
flex-wrap: wrap;
gap:2rem;
text-align: center;
  .img {
    border: 2px sloid black;
    border-radius: .5rem;
  }
`
export default Gallary;
