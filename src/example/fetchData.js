import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'

const getData = graphql`
 query FirstQuery
 {
    site(siteMetadata: {}) {
     info: siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }`
const FetchData = () => {
    // const data = useStaticQuery(getData)
    const {
        site :
        {
            info:{title,author,
                person:{
                    name,age
                }
        },
        },
    }=useStaticQuery(getData);
    return (
        <div>
            <p>Title : {title}</p>
            <p>Author : {author}</p>
            <p>Name :  {name}</p>
            <p>Age : {age}</p>
        </div>
    )
}

export default FetchData
