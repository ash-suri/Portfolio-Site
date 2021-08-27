import React from 'react';
import Content from '../components/Content';

import './About.css';

import Row from 'react-bootstrap/Row';

import Headshot from '../assets/images/Headshot.jpg';

function AboutPage(props) {

    return(
        <div>
            
            <img className="headshot-image" src={Headshot} alt=""/>

            <Content>

            <h1 className="subHeadings">About Me</h1>
            <p>Hi, my name is Ashvinder, but I usually go by Ash. I'm a 4th year computer science student at the University of Western Ontario, Canada.</p>

            <p>Most of my programming experience is in Java, Python, C++, and Javascript and you can explore some of my work over on the homepage. </p>

            <p>I am constantly looking to grow and apply my skills on a more practical level and, as such, am seeking Winter/Summer 2022 co-op positions. Head over to the contact page if you'd like to get in touch.</p>
            
           
          
                <Row>
                <h3 className="subHeadings">Languages</h3>
                </Row>
                <Row>
                    <div className="skills"> Java </div>
                    <div className="skills"> Python </div>
                    <div className="skills"> Javascript </div>
                    <div className="skills"> C++ </div>
                    <div className="skills"> SQL </div>
                    <div className="skills"> C# </div>
                    <div className="skills"> PHP </div>
                </Row>


                <Row>
                <h3 className="subHeadings">Technologies</h3>
                </Row>
                <Row>
                    <div className="skills"> React </div>
                    <div className="skills"> Node </div>
                    <div className="skills"> Bootstrap </div>
                    <div className="skills"> Jupyter Notebook </div>
                    <div className="skills"> Anaconda </div>
                    <div className="skills"> Pandas </div>
                    <div className="skills"> Apache </div>
                    <div className="skills"> MongoDB </div>
                    <div className="skills"> Linux </div>
                    <div className="skills"> Git </div>
                </Row>
            </Content>


            
        </div>
    );

}

export default AboutPage;