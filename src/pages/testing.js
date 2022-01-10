import React from 'react'
// import { graphql } from 'gatsby'
import Layout from '../componant/Layout'
import Gallary from '../example/Gallary'
const Testing = ({data}) => {
    // const author = data.site.info.author;
    return (
      <Layout>
      <main className='page'>
      <Gallary/>
      </main>
      </Layout>
    )
}
// export const data = graphql`
//  query SecoundQuery{
//     site(siteMetadata: {}) {
//      info: siteMetadata {
//         author
//         complexData {
//           age
//           name
//         }
//         description
//         person {
//           age
//           name
//         }
//         simpleData
//         title
//       }
//     }
//   }
// `
export default Testing
