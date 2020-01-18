import React from 'react'

import Layout from "../components/layout";
import aboutStyles from './about.module.scss'
import ProfilePic from '../images/profilepic.jpg'

const About = () => {
    return (
        <Layout>
        <h1>About me</h1>
            <img 
                style={{
                    width: '250px',
                }} 
                src={ProfilePic} 
                alt="profile pic" 
                />
            <p>Hi Im Martin Lord. I come from a great little village in the south of Leicestershire. I build and design websites and applications in the latest technologies which i absolutely love. If you need a website, application or just want some infomation or guidence on what options are out there feel free to get in touch.</p>
            <br></br>
            <p>check out my projects and social media accounts in the links above...</p>
        </Layout>
    )
}

export default About;