import React from 'react'
import "../assets/css/main.css"
import Layout from '../componant/Layout';
import SEO from '../componant/SEO';
function Error() {
    return (
        <Layout>
          <SEO title="Error"/>
        <main className="error-page">
          <section>
            <h1>404</h1>
            <h3>page not found</h3>
          </section>
        </main>
      </Layout>
    )
}

export default Error;
