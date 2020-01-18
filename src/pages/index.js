import React from "react"
import Footer from '../components/footer';
import { Link } from "gatsby"

import Layout from "../components/layout";
import indexStyles from '../styles/index.module.scss'

import logo from '../images/logo.jpg'


const IndexPage = () => {
  return (
    <Layout>
      <h2 className={indexStyles.nameTitle}>Hi, it's Martin<img 
      style={{
        marginBottom: '-8px',
        marginLeft: '16px',
        width: '50px',
      }} 
      src={logo} alt="logo" /></h2>
      <h1 className={indexStyles.mainHeadline}>I'm a front-end web developer</h1>
      <h2 className={indexStyles.subHeadline}>I build web interfaces</h2>
      <Footer />
    </Layout>
  )
}

export default IndexPage;