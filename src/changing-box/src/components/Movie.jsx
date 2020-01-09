import React, {Component} from 'react';
import {Accordion, Card} from 'react-bootstrap'

export default class Movie extends Component {

    render() {
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={this.props.movie.id}>
                    {this.props.movie.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.props.movie.id}>
                    <Card.Body>{this.props.movie.desc}</Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}
