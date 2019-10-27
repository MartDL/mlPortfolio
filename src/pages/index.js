import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import indexStyles from '../styles/index.module.scss'

import logo from '../images/logo.jpg'


const IndexPage = () => {
  return (
    <Layout>
      <h2 className={indexStyles.itsMartin}>Hi, it's Martin<img 
      style={{
        marginBottom: '-8px',
        marginLeft: '16px',
        width: '50px',
      }} 
      src={logo} alt="logo" /></h2>
      <h1 className={indexStyles.mainTitle}>I'm a front-end web developer</h1>
      <h2 className={indexStyles.subTitle}>I build web interfaces</h2>
    </Layout>
  )
}

export default IndexPage