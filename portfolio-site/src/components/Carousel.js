import React from 'react';

import Card from '../components/Card';

import jupyter from '../assets/images/jupyter-resized.jpeg';
import stats from '../assets/images/stats-resized.jpeg';
import memories from '../assets/images/memories-resized.png';
import mirror from '../assets/images/mirror-resized.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Making Memories Blog',
                    subTitle: 'A social media app that allows users to create, edit, like, and delete blog posts.',
                    imgSrc: memories,
                    link: 'https://making-memories.netlify.app',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Desktop Smart Mirror',
                    subTitle: 'Desktop app that interfaces with Spotify, Twitter, and Weather APIs to fetch user data and display it.',
                    imgSrc: mirror,
                    link: 'https://github.com/ash-suri/Smart-Mirror-Desktop-App',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Automated Script Tester',
                    subTitle: 'Python script for compact testing with execution time analysis',
                    imgSrc: jupyter,
                    link: 'https://github.com/ash-suri/Automated-Script-Tester',
                    selected: false
                },
                
                {
                    id: 3,
                    title: 'StatsDatabase',
                    subTitle: 'Desktop java program that visualizes various demographic data of major countries',
                    imgSrc: stats,
                    link: 'https://github.com/ash-suri/StatsDatabase',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;