import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import './Background.css'
import Header from './header'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ title }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "laptopBG.jpg" }) {
          childImageSharp {
            fluid(
              quality: 99
              ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      } 
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className="mainImage"
          fluid={imageData}
        >
        <Header />
        {title}
          <h1 className="title">Hi, I'm Martin</h1>
          <p className="titleLine">I build fast, really fast, websites and applications</p>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection