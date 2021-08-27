import React from 'react';

import Card from '../components/Card';

import jupyter from '../assets/images/jupyter-resized.jpeg';
import stats from '../assets/images/stats-resized.jpeg';
import inventory from '../assets/images/inventory-resized.jpeg';
import dict from '../assets/images/dict-resized.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Automated Script Tester',
                    subTitle: 'Python script for compact testing with execution time analysis',
                    imgSrc: jupyter,
                    link: 'https://github.com/ash-suri/Automated-Script-Tester',
                    selected: false
                },
                {
                    id: 1,
                    title: 'StatsDatabase',
                    subTitle: 'Desktop java program that visualizes various demographic data of major countries',
                    imgSrc: stats,
                    link: 'https://github.com/ash-suri/StatsDatabase',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Inventory Management Tool',
                    subTitle: 'Reactive stock management tool built using PHP and MySQL',
                    imgSrc: inventory,
                    link: 'https://github.com/ash-suri/Inventory-Management-Tool',
                    selected: false
                },
                
                {
                    id: 3,
                    title: 'Ordered Dictionary File Manager',
                    subTitle: 'File managing system using a binary search tree implementation of an ordered dictionary.',
                    imgSrc: dict,
                    link: 'https://github.com/ash-suri/Ordered-Dictionary-File-Manager',
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