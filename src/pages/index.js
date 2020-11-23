import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Community Meeting</h1>
    <p><b>November 29th at 3pm on Google Meet</b></p>
    <br />
    <br />
    <p>Google meet link:</p>
    <p><a href="meet.google.com/fxq-sjki-twc">meet.google.com/fxq-sjki-twc</a></p>
    <br />
    <br />
    <p>Agenda link:</p>
    <p><a href="https://docs.google.com/document/d/1N3ZxceYRZR3P-qOXPp-JkKmqzurGxN3VEOqr971SzNA/edit?usp=sharing">https://docs.google.com/document/d/1N3ZxceYRZR3P-qOXPp-JkKmqzurGxN3VEOqr971SzNA/edit?usp=sharing</a></p>
    <p>(please add anything you want to talk about)</p>
  </Layout>
)

export default IndexPage
