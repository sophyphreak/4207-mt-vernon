import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Community Meeting</h1>
    <br />
    <br />
    <h4>Meeting Date</h4>
    <p>Sunday, November 29th</p>
    <br/>
    <h4>Meeting Time</h4>
    <p>3 pm</p>
    <br/>
    <h4>Meeting Location</h4>
    <p><a href="meet.google.com/fxq-sjki-twc">meet.google.com/fxq-sjki-twc</a></p>
    <p>(click the link above to join)</p>
    <br/>
    <h4>Meeting Agenda</h4>
    <p><a href="https://docs.google.com/document/d/1N3ZxceYRZR3P-qOXPp-JkKmqzurGxN3VEOqr971SzNA/edit?usp=sharing">https://docs.google.com/document/d/1N3ZxceYRZR3P-qOXPp-JkKmqzurGxN3VEOqr971SzNA/edit?usp=sharing</a></p>
    <p>(please add anything you want to talk about)</p>
    <br/>
    <h4>Facilitating</h4>
    <p>Andrew (#16)</p>
  </Layout>
)

export default IndexPage
