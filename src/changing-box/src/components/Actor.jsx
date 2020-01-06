import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import '../style/actors.css'

class Actor extends Component {

    render() {
        return (
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={this.props.data.image}/>
                <Card.Body>
                    <Card.Title><a target="_blank" rel="noopener noreferrer"
                        href={this.props.data.imdbLink}> {`${this.props.data.fname} ${this.props.data.lname}`}</a></Card.Title>
                    <Card.Text>
                        Age: {this.props.data.getAge()}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}


export default Actor;
